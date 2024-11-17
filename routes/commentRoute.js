const express = require("express");
const router = express.Router();
const verifyToken = require("../Middleware/middleware");

const {
    createComment,
    getAllComments,
    deleteComment,
} = require("../controllers/CommentController");

router.post("/comment", createComment);
router.get("/comments", verifyToken, getAllComments);
router.delete("/comment", verifyToken, deleteComment);

module.exports = router;
