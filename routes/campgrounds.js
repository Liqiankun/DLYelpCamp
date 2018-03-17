var express = require('express')
var router = express.Router()
var Campground = require('../models/campground')

 router.get('/', function (req, res) {
  Campground.find(function (err, statuses) {
    if (!err) {
      res.render('campgrounds/index', { statuses })
    } else {
      console.log('err')
    }
  })
})

router.post('/', function (req, res) {
  Campground.create(req.body, function (err, campground) {
    if (!err) {
      res.redirect('campgrounds')
    } else {
      console.log('err')
    }
  })
})

router.get('/new', function (req, res) {
  res.render('campgrouns/new')
})

router.get('/:id', function (req, res) {
  Campground.findById(req.params.id).populate('comments').exec(function (err, campground) {
    if (!err) {
      res.render('campgrounds/show', { campground })
    } else {
      console.log('err', err)
    }
  })
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
