var express = require('express')
var router = express.Router()
var User = require('../models/user')
var passport = require('passport')

router.get('/', function (req, res) {
  res.redirect('campgrounds')
})

// ==========
// Authentication
router.get('/register', function (req, res) {
  res.render('register')
})

router.post('/register', function (req, res) {
  var newUser = new User({ username: req.body.username })
  User.register(newUser, req.body.password, function (err, user) {
    if (err) {
      console.log(err)
      return res.render('register')
    } else {
      passport.authenticate('local')(req, res, function () {
        res.redirect('/campgrounds')
      })
    }
  })
})

// log in page
router.get('/login', function (req, res) {
  res.render('login')
})

// log in
router.post('/login', passport.authenticate('local', {
  successRedirect: '/campgrounds',
  failureRedirect: '/login'
}), function (req, res) {
})

// log out
router.get('/logout', function (req, res) {
  req.logout()
  res.redirect('/campgrounds')
})

// is loggedin func
function isLoggedIn (req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  } else {
    res.redirect('/login')
  }
}

module.exports = router
