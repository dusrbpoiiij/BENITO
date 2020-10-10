const express = require('express');
const router = express.Router();

// middleware 
const {
  authVerify
} = require('../middleware/auth');


// Validation
const {
  validRegister,
  validLogin,
  forgotPasswordValidator,
} = require('../helpers/auth.valid');


// Load Controllers
const {
  getUserController,
  registerController,
  loginController,
  forgetController,
} = require('../controllers/auth.controller.js');

router.get('/', authVerify, getUserController);
router.post('/register', validRegister, registerController);
router.post('/login', validLogin, loginController);
router.post('/forgetpassword', forgotPasswordValidator, forgetController);


module.exports = router;