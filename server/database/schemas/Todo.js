const mongoose = require('mongoose');

const { Schema } = mongoose;

const todoSchema = new Schema({
  user: { type: Schema.ObjectId, ref: 'User', required: true },
  text: { type: String },
  completed: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now, immutable: true },
  updatedAt: { type: Date },
}, { versionKey: false });

todoSchema.set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  },
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
