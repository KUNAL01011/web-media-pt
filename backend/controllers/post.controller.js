import { Post } from "../models/post.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { deleteOnCloudinary, uploadOnCloudinary } from "../utils/cloudinary.js";

const createPost = asyncHandler(async (req, res) => {
  try {
    const { postContent } = req.body;
    const postMediaLocalPath = req.file?.path;

    if (!postContent && !postMediaLocalPath) {
      throw new ApiError(400, "Data is apcent to post");
    }

    if (!postContent) {
      throw new ApiError(400, "Description is must to upload");
    }

    let postUrl;
    if (postMediaLocalPath) {
      postUrl = await uploadOnCloudinary(postMediaLocalPath);
    }

    const post = await Post.create({
      postContent,
      postMedia: postUrl,
      createdBy: req.user._id,
    });

    if (!post) {
      throw new ApiError(500, "Something went wrong");
    }

    return res
      .status(200)
      .json(new ApiResponse(200, "Post created successfully", post));
  } catch (error) {
    return res
      .status(400)
      .json(new ApiError(400, "Something went wrong", error));
  }
});

const updatePost = asyncHandler(async (req, res) => {
  try {
    const { postId, postContent } = req.body;
    const postMediaLocalPath = req.file?.path;

    if (!postContent && !postMediaLocalPath) {
      throw new ApiError(400, "Nothing to update");
    }

    const post = await Post.findById(postId);

    if (!post) {
      throw new ApiError(400, "Post does not exist");
    }

    if (postMediaLocalPath) {
      if (post.postMedia) {
        const publicId = post.postMedia.split("/").pop().split(".")[0];
        const res = await deleteOnCloudinary(publicId);

        const uploadedResponse = await uploadOnCloudinary(postMediaLocalPath);
        post.postMedia = uploadedResponse;
      } else {
        const uploadedResponse = await uploadOnCloudinary(postMediaLocalPath);
        post.postMedia = uploadedResponse;
      }
    }

    if (postContent) {
      post.postContent = postContent;
    }

    await post.save();

    return res
      .status(200)
      .json(new ApiResponse(200, "Post updated successfully", post));
  } catch (error) {
    return res
      .status(400)
      .json(new ApiError(400, "Something went wrong", error));
  }
});

const deletePost = asyncHandler(async (req, res) => {
  try {
    const { postId } = req.params;

    if (!postId) {
      throw new ApiError(400, "Pls provide post id");
    }

    const post = await Post.findById(postId);
    console.log(post)

    if (!post) {
      throw new ApiError(400, "Post does not exist");
    }

    if (post.createdBy.toString() !== req.user._id.toString()) {
      throw new ApiError(400, "You are not verifyed to delete post");
    } else {
      const publicId = post.postMedia.split("/").pop().split(".")[0];
      await deleteOnCloudinary(publicId);
      await Post.findByIdAndDelete(postId);
    }

    return res
      .status(200)
      .json(new ApiResponse(200, "Post deleted successfully", {}));
  } catch (error) {
    return res
      .status(400)
      .json(new ApiError(400, "Something went wrong", error));
  }
});

export { createPost, updatePost ,deletePost};
