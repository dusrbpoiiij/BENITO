const mongoose = require('mongoose');
const crypto = require('crypto');

// User Schema 
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    trim: true,
    require: true,
    unique: true,
    lowercase: true,
  },
  name: {
    type: String,
    trim: true,
    require: true,
  },
  hashed_password: {
    type: String,
    require: true,
  },
  salt: String,
  role: {
    type: String,
    default: 'Normal'
  },
  history: {   // meal with other person history 
    type: Array,
    default: []
  }
}, {timestamps: true})

userSchema.virtual('password')
  .set(function (password) {
    this._password = password;
    this.salt = this.makeSalt();
    this.hashed_password = this.encryptPassword(password);
  })
  .get(function() {
    return this._password;
  })

  // method 
  userSchema.methods = {
    authenticate: function(plainPassword) {
      return this.encryptPassword(plainPassword) === this.hashed_password;
    },

    encryptPassword: function(password) {
      if (!password) return "";
      try {
        return crypto
          .createHmac('sha1', this.salt)
          .update(password)
          .digest('hex')
      } catch (err) {
        return "";
      }
    },

    makeSalt: function() {
      return Math.round(new Date().valueOf() * Math.random()) + "";
    }
  }

  module.exports = mongoose.model('User', userSchema);