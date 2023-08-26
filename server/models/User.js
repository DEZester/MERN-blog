import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    posts: [
      {
        type: mongoose.Schema.Types.ObjectId, //link on another schema
        ref: 'Post', //which schema would it be
      },
    ],
  },
  { timestamps: true, versionKey: false })

export default mongoose.model('User', UserSchema)