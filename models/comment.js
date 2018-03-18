var mongoose = require('mongoose')
var Schema = mongoose.Schema

var CommentSchema = Schema({
  text: String,
  author: {
    id: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    username: {
      type: String
    }
  }
})

module.exports = mongoose.model('Comment', CommentSchema)
