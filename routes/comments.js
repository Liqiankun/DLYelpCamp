var express = require('express')
var router = express.Router({ mergeParams: true })
var Campground = require('../models/campground')
var Comment = require('../models/comment')

router.post('/', isLoggedIn, function (req, res) {
  Campground.findById(req.params.id, function (err, campground) {
    if (err) {
      console.log('err')
      res.redirect(`/campgrounds/${req.params.id}`)
    } else {
      var commentParam = {
        text: req.body.comment.text,
        author: {
          id: req.user._id,
          username: req.user.username
        }
      }
      Comment.create(commentParam, function (_err, comment) {
        if (_err) {
          console.log('err')
          res.redirect(`/campgrounds/${req.params.id}`)
        } else {
          campground.comments.push(comment)
          campground.save(function (sErr) {
            if (sErr) {
              console.log(sErr)
              res.redirect(`/campgrounds/${req.params.id}`)
            } else {
              res.redirect(`/campgrounds/${req.params.id}`)
            }
          })
        }
      })
    }
  })
})

// comment routes
router.get('/new', isLoggedIn, function (req, res) {
  Campground.findById(req.params.id, function (err, campground) {
    if (err) {
      console.log(err)
    } else {
      res.render('comments/new', { campground })
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
