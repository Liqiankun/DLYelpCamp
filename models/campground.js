var mongoose = require('mongoose')
var Schema = mongoose.Schema
var campgroundSchame = new Schema({
  name: String,
  image: String,
  author: {
    id: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    username: String
  },
  description: String,
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
})

module.exports = mongoose.model('Campground', campgroundSchame)
