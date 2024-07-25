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
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    commentBy: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
    likedBy: [
      {
        type: Schema.Types.ObjectId,
        ref: "Like",
      },
    ],
  },
  { timestamps: true }
);

export const Post = mongoose.model("Post", postSchema);
