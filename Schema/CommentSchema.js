const mongoose = require("mongoose");

const CommentSchema = mongoose.Schema({
    username: String,
    userId: String,
    recipeId: String,
    comment: String
});

module.exports = mongoose.model("Comments", CommentSchema);
