import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: String,
    username: String,
    email: String,
    phone: Number,
  },
  { timestamps: true, versionKey: false }
);

const User = mongoose.model('User', userSchema);

export default User;
