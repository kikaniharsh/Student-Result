const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  sub1:Number,
  sub2:Number,
  sub3:Number,
  sub4:Number
});

const USER = mongoose.model('result', UserSchema)

module.exports = USER;
