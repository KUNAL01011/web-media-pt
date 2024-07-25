import mongoose, { Schema } from "mongoose";

const commentSchema = Schema(
  {
    commentMessage: {
      type: String,
    },
    commentPost: {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
    commentUser: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    reply: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
        default: null,
      },
    ],
  },
  { timestamps: true }
);

export const Comment = mongoose.model("Comment", commentSchema);
