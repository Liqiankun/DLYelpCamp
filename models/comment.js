var mongoose = require('mongoose')
var Schema = mongoose.Schema

var CommentSchema = Schema({
  text: String,
  author: String
})

module.exports = mongoose.model('Comment', CommentSchema)
