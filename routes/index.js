var express = require('express')
var router = express.Router()
var User = require('../models/user')
var passport = require('passport')

router.get('/', function (req, res) {
  res.render('landing')
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
      console.log('err', err.message)
      req.flash('error', err.message)
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
  req.flash('success', 'Log you out success')
  res.redirect('/campgrounds')
})

// is loggedin func
function isLoggedIn (req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  } else {
    req.flash('error', 'Please login first')
    res.redirect('/login')
  }
}

module.exports = router
