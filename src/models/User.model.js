const mongoose = require("mongoose");

const PASSWORD_MIN_REQUIRED_LENGTH = process.env.PASSWORD_MIN_REQUIRED_LENGTH;

var UserSchema = new mongoose.Schema(
  {
    name: {
      first_name: {
        type: String,
        required: true,
        trim: true,
      },
      last_name: {
        type: String,
        required: false,
        trim: true,
      },
    },
    email: {
      type: String,
      lowercase: true,
      unique: true,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 320,
    },
    password: {
      type: String,
      trim: true,
      required: true,
      minlength: PASSWORD_MIN_REQUIRED_LENGTH,
    },
  },
  {
    timestamps: true,
  }
);
mongoose.model("User", UserSchema);
