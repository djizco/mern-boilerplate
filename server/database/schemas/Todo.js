const R = require('ramda');
const mongoose = require('mongoose');

const { Schema } = mongoose;

const todoSchema = new Schema({
  user: { type: Schema.ObjectId, ref: 'User', required: true },
  text: { type: String },
  completed: { type: Boolean, default: false },
  created_at: { type: Date, default: Date.now, immutable: true },
  updated_at: { type: Date },
});

todoSchema.methods.hide = function() {
  return R.omit(['__v'], this.toObject());
};

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
