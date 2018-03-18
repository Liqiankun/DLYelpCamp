var Comment = require('../models/comment')
var Campground = require('../models/campground')

// check comment owership
function checkCommentOwnership (req, res, next) {
  if (req.isAuthenticated()) {
    Comment.findById(req.params.cmt_id, function (err, comment) {
      console.log('comment', comment)
      if (err) {
        res.redirect('back')
      } else {
        if (comment.author.id.equals(req.user._id)) {
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

// check campground owership
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

// is loggedin func
function isLoggedIn (req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  } else {
    req.flash('error', 'You need to log in first')
    res.redirect('/login')
  }
}

module.exports = {
  checkCommentOwnership,
  checkCampgroundOwnership,
  isLoggedIn
}
