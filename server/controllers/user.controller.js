const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const validator = require('validator');
const sendMail = require('../controllers/mail.controller');

// Bring in Models & Helpers
const User = require('../models/User');
const auth = require('../middlewares/auth');
const role = require('../middlewares/role');

const {
  BASE_CLIENT_URL
} = process.env;
// fetch all users api
// router.get('/list', auth, role.checkRole(role.ROLES.Admin), (req, res) => {
//   User.find({}, (err, data) => {
//     if (err) {
//       return res.status(400).json({
//         error: 'Your request could not be processed. Please try again.'
//       });
//     }
//     res.status(200).json({
//       users: data
//     });
//   });
// });

// router.get('/', auth, (req, res) => {
//   const user = req.user._id;

//   User.findById(user, { password: 0, _id: 0 }, (err, user) => {
//     if (err) {
//       return res.status(400).json({
//         error: 'Your request could not be processed. Please try again.'
//       });
//     }

//     res.status(200).json({
//       user
//     });
//   });
// });

// router.put('/', auth, (req, res) => {
//   const user = req.user._id;
//   const update = req.body.profile;
//   const query = { _id: user };

//   User.findOneAndUpdate(
//     query,
//     update,
//     {
//       new: true
//     },
//     (err, user) => {
//       if (err) {
//         return res.status(400).json({
//           error: 'Your request could not be processed. Please try again.'
//         });
//       }

//       res.status(200).json({
//         success: true,
//         message: 'Your profile is successfully updated!',
//         user
//       });
//     }
//   );
// });


const register = async (req, res) => {
  try {
    const {
      name,
      email,
      password
    } = req.body

    if (!name || !email || !password)
      return res.status(400).json({
        msg: "Please fill in all fields."
      })

    if (!validator.isEmail(email))
      return res.status(400).json({
        msg: "Invalid emails."
      })

    const user = await User.findOne({
      email
    })
    if (user) return res.status(400).json({
      msg: "This email already exists."
    })

    if (password.length < 6)
      return res.status(400).json({
        msg: "Password must be at least 6 characters."
      })

    const passwordHash = await bcrypt.hash(password, 12)

    const newUser = {
      name,
      email,
      password: passwordHash,
    }

    const activation_token = createActivationToken(newUser)

    const url = `${BASE_CLIENT_URL}/user/activate/${activation_token}`
    sendMail(email, url, "Verify your email address");


    res.json({
      msg: "Register Success! Please activate your email to start."
    })
  } catch (err) {
    return res.status(500).json({
      msg: err.message
    })
  }
}

const activateEmail = async (req, res, next) => {
  try {
    const {
      activation_token
    } = req.body
    const user = jwt.verify(activation_token, process.env.ACTIVATION_TOKEN_SECRET);

    const {
      name,
      email,
      password
    } = user

    const check = await User.findOne({
      email
    })
    if (check) return res.status(400).json({
      msg: "This email is already exists"
    });

    const newUser = new User({
      name,
      email,
      password
    })

    await newUser.save()

    res.json({
      msg: "Account has been activated!"
    })
  } catch (err) {
    return res.status(500).json({
      msg: err.message
    })
  }
}

const login = async (req, res) => {
  try {
    const {
      email,
      password
    } = req.body
    const user = await User.findOne({
      email
    });
    console.log(email);
    if (!user) return res.status(400).json({
      msg: `${email} is not belong to any account`
    });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({
      msg: "The password is incorrect"
    });

    console.log(user);
    const refresh_token = createRefreshToken({
      id: user._id
    });

    res.cookie('refreshtoken', refresh_token, {
      httpOnly: true,
      path: '/user/refresh_token',
      maxAge: 7 * 24 * 60 * 60 * 1000
    });

    res.json({
      msg: 'Login success!'
    });
  } catch (err) {
    return res.status(500).json({
      msg: err.message
    });
  }
}

const getAccessToken = (req, res) => {
  try {
    const rf_token = req.cookies.refreshtoken;
    if (!rf_token) return res.status(400).json({
      msg: "Please login now!"
    })

    jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
      if (err) return res.status(400).json({
        msg: "Please login now!"
      });
      const access_token = createAccessToken({
        id: user.id
      });
      res.json({
        access_token
      });

    })


  } catch (err) {
    return res.status(500).json({
      msg: err.message
    });
  }
}

const forgotPassword = async (req, res) => {
  try {
    const {
      email
    } = req.body
    const user = await User.findOne({
      email
    })
    if (!user) return res.status(400).json({
      msg: "This email does not exist."
    })

    const access_token = createAccessToken({
      id: user._id
    })
    const url = `${BASE_CLIENT_URL}/user/reset/${access_token}`

    sendMail(email, url, "Reset your password")
    res.json({
      msg: "Re-send the password, please check your email."
    })
  } catch (err) {
    return res.status(500).json({
      msg: err.message
    })
  }
}

const resetPassword = async (req, res) => {
  try {
    const {
      password
    } = req.body
    const passwordHash = await bcrypt.hash(password, 12)

    await User.findOneAndUpdate({
      _id: req.user.id
    }, {
      password: passwordHash
    })

    res.json({
      msg: "Password successfully changed!"
    })
  } catch (err) {
    return res.status(500).json({
      msg: err.message
    })
  }
}

const getUserInfor = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');

    res.json(user);
  } catch (err) {
    return res.status(500).json({
      msg: err.message
    })
  }
}

const getUserAllInfor = async (req, res) => {
  try {
    const user = await User.find().select('-password');
    res.json(user);
  } catch (error) {
    return res.status(500).json({
      msg: error.message
    });
  }
}

const logOut = async (req, res) => {
  try {
    res.clearCookie('refreshtoken', {
      path: '/user/refresh_token'
    })
    return res.json({
      msg: "Logged out."
    })
  } catch (err) {
    return res.status(500).json({
      msg: err.message
    })
  }
}

const updateUser = async (req, res) => {
  try {
    const {name, address, dateofBirth, phone, avatarUrl} = req.body
    await User.findOneAndUpdate({_id: req.user.id}, {
      name, address, dateofBirth, phone, avatarUrl
    })

    res.json({msg: "Update Success!"})
} catch (err) {
    return res.status(500).json({msg: err.message})
}
}

const updateUserRole = async (req, res) => {
  try {
    const {role} = req.body

    await User.findOneAndUpdate({_id: req.params.id}, {
        role
    })

    res.json({msg: "Update Success!"})
} catch (err) {
    return res.status(500).json({msg: err.message})
}
}

const deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.json({msg: "Successfully remove user!"})
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }

}
const createActivationToken = (payload) => {
  return jwt.sign(payload, process.env.ACTIVATION_TOKEN_SECRET, {
    expiresIn: '5m'
  });
}

const createAccessToken = (payload) => {
  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: '15m'
  });
}

const createRefreshToken = (payload) => {
  return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: '7d'
  });
}

module.exports = {
  register,
  activateEmail,
  login,
  getAccessToken,
  forgotPassword,
  resetPassword,
  getUserInfor,
  getUserAllInfor,
  logOut,
  updateUser,
  updateUserRole,
  deleteUser
};