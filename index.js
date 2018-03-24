var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var app = express()
var Campground = require('./models/campground')
var Comment = require('./models/comment')
var User = require('./models/user')
var passport = require('passport')
var LocalStrategy = require('passport-local')
var expressSession = require('express-session')
var methodOverride = require('method-override')
var flash = require('connect-flash')
// var seedDB = require('./seeds')
// require routes
var campgroundRoutes = require('./routes/campgrounds')
var commentRoutes = require('./routes/comments')
var authRoutes = require('./routes/index')

mongoose.connect('mongodb://localhost/yelp_camp')

// seedDB()

app.use(bodyParser.urlencoded({ extended: true }))

app.set('view engine', 'ejs')
app.use(express.static(`${__dirname}` + '/public'))

// use flash
app.use(flash())

// authentication
app.use(expressSession({
  secret: 'these videos are very good',
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

//override method
app.use(methodOverride('_method'))

// can use currentUser in every ejs
app.use(function (req, res, next) {
  res.locals.currentUser = req.user
  res.locals.error = req.flash('error')
  res.locals.success = req.flash('success')
  next()
})

// use routes
app.use(authRoutes)
app.use('/campgrounds', campgroundRoutes)
app.use('/campgrounds/:id/comments', commentRoutes)

app.listen(process.env.PORT || 5000, process.env.IP, function () {
  console.log('YelpCamp server has started!')
})
