import mongoose from 'mongoose';

const userShema = mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "user",
  },
  address: {
    type: String,
  },
});



export default mongoose.model('User', userShema);
