const User = require('../models/auth.model');
const expressJwt = require('express-jwt');
const _ = require('lodash');
const fetch = require('node-fetch');
const {validationResult} = require('express-validator');
const jwt = require('jsonwebtoken');
// Custom error handler to get useful error from database errors
const {errorHandler} = require('../helpers/dbErrorHandling');


// @Route GET api/user/
// @decs  User Information
// @access Private 
exports.getUserController = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-hashed_password');
    res.json(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server Error');
  }
};

// @Route POST api/user/register
// @decs  Register user
// @access Public
exports.registerController = async (req, res) => {
  const {name, email, password} = req.body;
  const errors = validationResult(req);

  if(!errors.isEmpty()) {
    const firstError = erros.array().map(error => error.msg)[0];
    return res.status(422).json({
      error: firstError
    })
  } else {
    await User.findOne({
      email
    }).exec((err, user) => {
      if(user) {
        return res.status(400).json({
          erorr: 'Email is taken'
        })
      }
    })

    const user = new User({
      name,
      email,
      password
    });

    user.save();

    // payload to generate token
    const payload = {
      user: {
        id: user.id
      }
    }

    jwt.sign(
      payload,
      process.env.JWT_SECRET, {
        expiresIn: 360000,
      },
      (err, token) => {
        if(err) throw err;
        res.json({token})
      }
    )
  }
}

// @Route POST api/user/login
// @decs  Login user
// @access Public
exports.loginController = async (req, res) => {
  const {name, email, password} = req.body;
  const errors = validationResult(req);

  if(!errors.isEmpty()) {
    const firstError = erros.array().map(error => error.msg)[0];
    return res.status(422).json({
      error: firstError
    })
  } else {
    User.findOne({
      email
    }).exec((err, user) => {
      if (err || !user) {
        return res.status(400).json({
          error: 'User with that email does not exist, Please Sign up'
        })
      }

      // Autehnticate 
      if(!user.authenticate(password)) {
        return res.status(400).json({
          error: 'Email and Password do not match'
        })
      }

      // payload to generate token
      const payload = {
        user: {
          id: user.id
        }
      }

      jwt.sign(
        payload,
        process.env.JWT_SECRET, {
          expiresIn: 360000,
        },
        (err, token) => {
          if(err) throw err;
          res.json({token})
        }
      )
    })
  }
}

// @Route POST api/user/forgetpassword
// @decs  Login user
// @access Public    
// 수정 필요 
exports.forgetController = async (req, res) => {
  const {email} = req.body;
  const errors = validationResult(req);

  if(!errors.isEmpty()) {
    const firstError = erros.array().map(error => error.msg)[0];
    return res.status(422).json({
      error: firstError
    })
  } else {
    User.findOne({
      email
    }).exec((err, user) => {
      if (err || !user) {
        return res.status(400).json({
          error: 'User with that email does not exist, Please Sign up'
        })
      }
    })
  }
}