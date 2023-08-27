import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  image: String,
  bio: String,
  threads: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Thread'
    }
  ],
  onboarded: {
    type: Boolean,
    default: false,
  },
  communities: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Community'
    }
  ]
});

// fallbacks to creating a mongoose model User if it doesn't exist.
// for the second, the user model is already created
const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
