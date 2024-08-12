import mongoose from "mongoose";

const logSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Log = mongoose.model('Log', logSchema);

export default Log
