import mongoose, { Schema } from "mongoose";

const postSchema = Schema(
  {
    postContent: {
      type: String,
      required: true,
    },
    postMedia: {
      type: String,
    },
    postCreater: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    postComment: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
    postLikes: [
      {
        type: Schema.Types.ObjectId,
        ref: "Like",
      },
    ],
  },
  { timestamps: true }
);

export const Post = mongoose.model("Post", postSchema);
