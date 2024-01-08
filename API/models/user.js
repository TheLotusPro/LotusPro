const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  bio: {type: String},
  password: {type: String, required: true},
  profileImage: {type: String}, // Change this line
  profileHeader: {type: String},
  verifiedBadge: {
    type: Boolean,
  },
  posts: [{type: mongoose.Schema.Types.ObjectId, red: 'Post'}],
  joinedDate: {type: Date, default: Date.now},
  sentFollowRequest: [{type: mongoose.Schema.Types.ObjectId, red: 'User'}],
  receivedFollowRequested: [
    {type: mongoose.Schema.Types.ObjectId, red: 'User'},
  ],
  followers: [{type: mongoose.Schema.Types.ObjectId, red: 'User'}],
  verified: {
    type: Boolean,
    default: false,
  },
  verificationToken: String,
});

const User = mongoose.model('User', userSchema);
module.exports = User;
