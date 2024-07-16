import mongoose, { Schema } from "mongoose";

const likeSchema = Schema(
  {
    likedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    likedPost: {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  },
  { timestamps: true }
);

export const Like = mongoose.model("Like", likeSchema);
