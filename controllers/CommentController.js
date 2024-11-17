const Comment = require("../Schema/CommentSchema");

const createComment = async (req, res) => {
    try {
        const { username, comment, recipeId, userId } = req.body;
        if (!username || !comment || !recipeId || !userId) return res.status(400).send({ message: 'Username, UserId, Comment & Recipe Id required !!' });

        const newComment = await Comment.create({ userId, username, comment, recipeId });
        res.status(201).json(newComment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

const getAllComments = async (req, res) => {
    try {
        const allComments = await Comment.find();

        res.status(200).json(allComments);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

const deleteComment = async (req, res) => {
    try {
        const { commentId, userId } = req.query;
        await Comment.deleteOne({ userId, _id: commentId });

        res.status(200).json({ _id: commentId });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = {
    getAllComments,
    createComment,
    deleteComment,
};
