const User = require('../models/User');
const ROLES = {
    Admin: 1,
    Customer: 0
  };
  
  const checkRole = (role) => async (req, res, next) => {
    try {
      if (!req.user) {
        return res.status(401).send('Unauthorized');
      }
      const currentUser = await User.findOne({_id: req.user.id})
    
      const hasRole = currentUser.role === role;
      if (!hasRole) {
        return res.status(403).send('You are not allowed to make this request.');
      }
      next();
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
    
  
    
  };
  
  const role = { ROLES, checkRole };
  
  module.exports = role;