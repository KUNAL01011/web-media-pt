import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { Post } from "../models/post.model.js";
import { Comment } from "../models/comment.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const createComment = asyncHandler(async (req, res) => {
  try {
    const { postId } = req.params;
    const { comment } = req.body;

    if (!comment && !post) {
      throw new ApiError(400, "No comment to create");
    }

    const post = await Post.findById(postId);

    if (!post) {
      throw new ApiError(400, "No post exist to comment");
    }

    const comments = await Comment.create({
      commentMessage: comment,
      commentPost: post._id,
      commentUser: req.user._id,
    });

    if (!comments) {
      throw new ApiError(500, "Something went wrong");
    }

    post.commentBy.push(comments._id);

    await post.save();

    return res
      .status(200)
      .json(new ApiResponse(200, "comment created", comments));
  } catch (error) {
    return res
      .status(400)
      .json(new ApiError(400, "Something went wrong", error));
  }
});

const addReply = asyncHandler(async (req, res) => {
  try {
    const { commentId } = req.params;
    const { reply } = req.body;

    if (!reply && !commentId) {
      throw new ApiError(400, "nothing to reply");
    }

    const comment = await Comment.findById(commentId);

    if (!comment) {
      throw new ApiError(400, "comment does not exist");
    }

    const commentReply = await Comment.create({
      commentMessage: reply,
      commentPost: commentId,
      commentUser: req.user._id,
    });

    if (!commentReply) {
      throw new ApiError(500, "Comment does not created");
    }

    comment.reply.push(commentReply._id);

    await comment.save();

    return res
      .status(200)
      .json(new ApiResponse(200, "reply add to comment", commentReply));
  } catch (error) {
    return res
      .status(400)
      .json(new ApiError(400, "Something went wrong", error));
  }
});

const editComment = asyncHandler(async (req, res) => {
  try {
    const { commentId } = req.params;
    const { comment } = req.body;

    if (!commentId && !comment) {
      throw new ApiError(400, "nothing to edit");
    }

    const comments = await Comment.findById(commentId);

    if (comments.commentUser.toString() !== req.user._id.toString()) {
      throw new ApiError(400, "You are not auth to delete the comment");
    }

    if (!comments) {
      throw new ApiError(400, "nothing to edit");
    }

    comments.commentMessage = comment;

    await comments.save();

    return res
      .status(200)
      .json(new ApiResponse(200, "comment edit successfully", comments));
  } catch (error) {
    return res
      .status(400)
      .json(new ApiError(400, "Something went wrong", error));
  }
});


const deleteComment = asyncHandler(async (req, res) => {
  try {
    const { commentId } = req.params;
    const userId = req.user._id;

    if (!commentId) {
      throw new ApiError(400, "Comment ID does not exist");
    }

    const comment = await Comment.findById(commentId);

    if (!comment) {
      throw new ApiError(404, "Comment not found");
    }

    if (comment.commentUser.toString() !== userId.toString()) {
      throw new ApiError(403, "You are not authorized to delete this comment");
    }

    const deleteChildComments = async (commentId) => {
      console.log("fn call");
      const childComments = await Comment.findById(commentId);
      console.log("child find", childComments);
      if (childComments.reply.length > 0) {
        for (let childComment of childComment.reply) {
          console.log("loop 2 : ", childComment);
          await deleteChildComments(childComment);
        }
      }
      await Comment.findByIdAndDelete(commentId);
    };

    if (comment.reply.length > 0) {
      for (let childComment of comment.reply) {
        console.log("first loop : ", childComment);
        await deleteChildComments(childComment);
      }
      await Comment.findByIdAndDelete(comment._id);
    }

    const postParent = await Post.findById(comment.commentPost);
    const commentParent = await Comment.findById(comment.commentPost);

    if (postParent) {
      await Post.updateMany(
        { _id: { $in: postParent._id } },
        { $pull: { commentBy: commentId } }
      );
    }
    if (commentParent) {
      if (commentParent.reply.length > 0) {
        await Comment.updateMany(
          { _id: { $in: commentParent._id } },
          { $pull: { reply: commentId } }
        );
      }
    }

    return res
      .status(200)
      .json(new ApiResponse(200, "Comment deleted successfully", {}));
  } catch (error) {
    return res
      .status(400)
      .json(new ApiError(400, "Something went wrong", error));
  }
});

export { createComment, addReply, editComment, deleteComment };
