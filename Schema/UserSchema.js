const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: String,
  password: String,
  role: {
    type: String,
    default: 'customer'
  },
  email: { type: String, lowercase: true },
});

module.exports = mongoose.model("User", UserSchema);
