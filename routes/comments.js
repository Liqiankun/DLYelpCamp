var express = require('express')
var router = express.Router({ mergeParams: true })
var Campground = require('../models/campground')
var Comment = require('../models/comment')
var { checkCommentOwnership, isLoggedIn }  = require('../middleware/index')
// create comment
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

// edit comment
router.get('/:cmt_id/edit', checkCommentOwnership, function (req, res) {
  var campground_id = req.params.id
  Comment.findById(req.params.cmt_id, function (err, comment) {
    if (err) {
      console.log(err)
    } else {
      res.render('comments/edit', { campground_id, comment })
    }
  })
})

// update comment
router.put('/:cmt_id', checkCommentOwnership, function (req, res) {
  Comment.findByIdAndUpdate(req.params.cmt_id, req.body.comment, function (err, comment) {
    if (err) {
      console.log(err)
    } else {
      res.redirect(`/campgrounds/${req.params.id}`)
    }
  })
})

// delete comment
router.delete('/:cmt_id', checkCommentOwnership, function (req, res) {
  Comment.findByIdAndRemove(req.params.cmt_id, function (err, comment) {
    if (err) {
      console.log(err)
    } else {
      res.redirect(`/campgrounds/${req.params.id}`)
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
