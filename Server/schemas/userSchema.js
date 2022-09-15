const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  // googleID: {
  //   type: String,
  //   default: null
  // },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    default: false,
    required: true
  },
  name: {
    type: String,
    default: "",
    required: true,
  },
  post: [
    {
      title: {
        type: Schema.Types.ObjectId,
        ref: 'product'
      },
      quantity: {
        type: Number
      },
      name: {
        type: String
      },
    }
  ],
  representative: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
  date: {
    type: Date,
    default: Date.now
  },
  deleted: {
    type: Boolean,
    default: false
  },
})

module.exports = User = mongoose.model('user', UserSchema)
