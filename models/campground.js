var mongoose = require('mongoose')
var Schema = mongoose.Schema
var campgroundSchame = new Schema({
  name: String,
  image: String,
  description: String,
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
})

module.exports = mongoose.model('Campground', campgroundSchame)
