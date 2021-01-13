const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const validator = require('validator');
const sendMail = require('../controllers/mail.controller');
const fetch = require('node-fetch');
require('dotenv/config');
const {
  BASE_CLIENT_URL,
  MAILING_SERVICE_CLIENT_ID
} = process.env;
const {
  google
} = require('googleapis');
const {
  OAuth2
} = google.auth;
const client = new OAuth2(MAILING_SERVICE_CLIENT_ID);

// Bring in Models & Helpers
const User = require('../models/User');
const auth = require('../middlewares/auth');
const role = require('../middlewares/role');




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

    const url = `${BASE_CLIENT_URL}/users/activate/${activation_token}`
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

const activateEmail = async (req, res) => {
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
    
    if (!user) return res.status(400).json({
      msg: `${email} is not belong to any account`
    });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({
      msg: "The password is incorrect"
    });

    const refresh_token = createRefreshToken({
      id: user._id
    });

    res.cookie('refreshtoken', refresh_token, {
      path: '/api/users/refresh_token',
      httpOnly: true,
      secure: true,
      maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
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
      msg: "No cookies available!"
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
    console.log(req.user.id)
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
    const users = await User.find().select('-password');
    res.json(users);
  } catch (error) {
    return res.status(500).json({
      msg: error.message
    });
  }
}

const logOut = async (req, res) => {
  try {
    res.clearCookie('refreshtoken', {
      path: '/api/users/refresh_token'
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
    const {
      name,
      address,
      dateofBirth,
      phone,
      avatarUrl
    } = req.body
    await User.findOneAndUpdate({
      _id: req.user.id
    }, {
      name,
      address,
      dateofBirth,
      phone,
      avatarUrl
    })

    res.json({
      msg: "Update Success!"
    })
  } catch (err) {
    return res.status(500).json({
      msg: err.message
    })
  }
}

const updateUserRole = async (req, res) => {
  try {
    const {
      role
    } = req.body

    await User.findOneAndUpdate({
      _id: req.params.id
    }, {
      role
    })

    res.json({
      msg: "Update Success!"
    })
  } catch (err) {
    return res.status(500).json({
      msg: err.message
    })
  }
}

const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id)
    res.json({
      msg: "Successfully remove user!"
    })
  } catch (err) {
    return res.status(500).json({
      msg: err.message
    })
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

const googleLogin = async (req, res) => {
  try {
    const {
      tokenId
    } = req.body

    const verify = await client.verifyIdToken({
      idToken: tokenId,
      audience: process.env.MAILING_SERVICE_CLIENT_ID
    })

    const {
      email_verified,
      email,
      name,
      picture
    } = verify.payload

    const password = email + process.env.GOOGLE_SECRET

    const passwordHash = await bcrypt.hash(password, 12)

    if (!email_verified) return res.status(400).json({
      msg: "Email verification failed."
    })

    const user = await User.findOne({
      email
    })

    if (user) {
      const isMatch = await bcrypt.compare(password, user.password)
      if (!isMatch) return res.status(400).json({
        msg: "These already exists an account with this email. Please login with your email"
      })

      const refresh_token = createRefreshToken({
        id: user._id
      })
      res.cookie('refreshtoken', refresh_token, {
        path: '/api/users/refresh_token',
        httpOnly: true,
        secure: true,
        maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
      })

      res.json({
        msg: "Login success!"
      })
    } else {
      const newUser = new User({
        name,
        email,
        password: passwordHash,
        avatarUrl: picture
      })

      await newUser.save()

      const refresh_token = createRefreshToken({
        id: newUser._id
      })
      res.cookie('refreshtoken', refresh_token, {
        path: '/api/users/refresh_token',
        httpOnly: true,
        secure: true,
        maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
      })

      res.json({
        msg: "Login success!"
      })
    }


  } catch (err) {
    return res.status(500).json({
      msg: err.message
    })
  }
}

const facebookLogin = async (req, res) => {
  try {
    const {
      accessToken,
      userID
    } = req.body

    const URL = `https://graph.facebook.com/v2.9/${userID}/?fields=id,name,email,picture&access_token=${accessToken}`

    const data = await fetch(URL).then(res => res.json()).then(res => {
      return res
    })

    const {
      email,
      name,
      picture
    } = data

    const password = email + process.env.FACEBOOK_SECRET

    const passwordHash = await bcrypt.hash(password, 12)

    const user = await User.findOne({
      email
    })

    if (user) {
      const isMatch = await bcrypt.compare(password, user.password)
      if (!isMatch) return res.status(400).json({
        msg: "These already exists an account with this email. Please login with your email"
      })

      const refresh_token = createRefreshToken({
        id: user._id
      })
      res.cookie('refreshtoken', refresh_token, {
        httpOnly: true,
        secure: true,
        path: '/api/users/refresh_token',
        maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
      })

      res.json({
        msg: "Login success!"
      })
    } else {
      const newUser = new User({
        name,
        email,
        password: passwordHash,
        avatarUrl: picture.data.url
      })

      await newUser.save()

      const refresh_token = createRefreshToken({
        id: newUser._id
      })
      res.cookie('refreshtoken', refresh_token, {
        httpOnly: true,
        secure: true,
        path: '/api/users/refresh_token',
        maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
      })

      res.json({
        msg: "Login success!"
      })
    }


  } catch (err) {
    return res.status(500).json({
      msg: err.message
    })
  }

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
  deleteUser,
  googleLogin,
  facebookLogin
};