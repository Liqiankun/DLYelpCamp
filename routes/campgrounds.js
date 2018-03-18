var express = require('express')
var router = express.Router()
var Campground = require('../models/campground')

// campgrounds list
 router.get('/', function (req, res) {
  Campground.find(function (err, statuses) {
    if (!err) {
      res.render('campgrounds/index', { statuses })
    } else {
      console.log('err')
    }
  })
})

// create campground
router.post('/', isLoggedIn, function (req, res) {
  var newCampground = {
    name: req.body.name,
    image: req.body.image,
    description: req.body.description,
    author: {
      id: req.user._id,
      username: req.user.username
    }
  }
  Campground.create(newCampground, function (err, campground) {
    if (!err) {
      res.redirect('campgrounds')
    } else {
      console.log('err')
    }
  })
})

// campground new
router.get('/new', isLoggedIn, function (req, res) {
  res.render('campgrouns/new')
})

// show campground
router.get('/:id', function (req, res) {
  Campground.findById(req.params.id).populate('comments').exec(function (err, campground) {
    if (!err) {
      res.render('campgrounds/show', { campground })
    } else {
      console.log('err', err)
    }
  })
})

// edit campground
router.get('/:id/edit', checkCampgroundOwnership, function (req, res) {
  Campground.findById(req.params.id, function (err, campground) {
    if (err) {
      console.log(err)
    } else {
      res.render('campgrounds/edit', { campground })
    }
  })
})

//update campground
router.put('/:id', checkCampgroundOwnership, function (req, res) {
  Campground.findByIdAndUpdate(req.params.id, req.body.campground, function (err, campground) {
    if (err) {
      console.log(err)
    } else {
      res.redirect(`/campgrounds/${req.params.id}`)
    }
  })
})

// delete campground
router.delete('/:id', checkCampgroundOwnership, function (req, res) {
  Campground.findByIdAndRemove(req.params.id, function (err) {
    if (err) {
      console.log(err)
    } else {
      res.redirect('/campgrounds')
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

function checkCampgroundOwnership (req, res, next) {
  if (req.isAuthenticated()) {
    Campground.findById(req.params.id, function (err, campground) {
      if (err) {
        res.redirect('back')
      } else {
        if (campground.author.id.equals(req.user._id)) {
          next()
        } else {
          res.redirect('back')
        }
      }
    })
  } else {
    res.redirect('/login')
  }
}

module.exports = router
