import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { deleteOnCloudinary, uploadOnCloudinary } from "../utils/cloudinary.js";

const updateProfile = asyncHandler(async (req, res) => {
  try {
    const { username, fullName, bio, link } = req.body;

    const user = req.user;

    if (!username && !fullName && !bio && !link) {
      throw new ApiError(400, "nothing to update");
    }

    if (username) {
      const existedUsername = await User.findOne({ username });
      if (existedUsername) {
        throw new ApiError(400, "username already exist");
      }
    }

    const updatedUser = await User.findByIdAndUpdate(
      user._id,
      {
        $set: {
          username,
          fullName,
          bio,
          link,
        },
      },
      { new: true }
    );

    if (updatedUser) {
      res
        .status(200)
        .json(new ApiResponse(200, "Profile Update Successfully", updatedUser));
    } else {
      throw new ApiError(500, "Something went wrong");
    }
  } catch (error) {
    return res
      .status(400)
      .json(new ApiError(400, "Something went wrong", error));
  }
});

const updatePassword = asyncHandler(async (req, res) => {
  try {
    const { oldPassword, newPassword, confirmPassword } = req.body;

    if (!oldPassword && !newPassword && !confirmPassword) {
      throw new ApiError(400, "all password are required");
    }

    if (newPassword !== confirmPassword) {
      throw new ApiError(400, "Both password must be same");
    }

    const user = await User.findById(req.user?._id);
    const isPasswordCorrect = await user.isPasswordCorrect(oldPassword);

    if (!isPasswordCorrect) {
      throw new ApiError(400, "Invalid old password");
    }

    user.password = newPassword;

    await user.save({ validateBeforeSave: false });

    return res
      .status(200)
      .json(new ApiResponse(200, "Password updated successfully", {}));
  } catch (error) {
    return res
      .status(400)
      .json(new ApiError(400, "Something went wrong", error));
  }
});

const updateUserAvatar = asyncHandler(async (req, res) => {
  try {
    const avatarLocalPath = req.file?.path;

    if (!avatarLocalPath) {
      throw new ApiError(400, "Avatar file is missing");
    }

    const user = req.user;

    if (user.avatar) {
      const publicId = user.avatar.split("/").pop().split(".")[0];

      const res = await deleteOnCloudinary(publicId);

      const uploadedResponse = await uploadOnCloudinary(avatarLocalPath);
      user.avatar = uploadedResponse;
    } else {
      const uploadedResponse = await uploadOnCloudinary(avatarLocalPath);
      user.avatar = uploadedResponse;
    }

    await user.save();

    return res
      .status(200)
      .json(new ApiResponse(200, "avatar upload successfully", user));
  } catch (error) {
    return res
      .status(400)
      .json(new ApiError(400, "Something went wrong", error));
  }
});

const updateUserCoverImg = asyncHandler(async (req, res) => {
  try {
    const coverImgLocalPath = req.file?.path;

    if (!coverImgLocalPath) {
      throw new ApiError(400, "coverImage file is missing");
    }

    const user = req.user;

    if (user.coverImage) {
      const publicId = user.coverImage.split("/").pop().split(".")[0];

      const res = await deleteOnCloudinary(publicId);

      const uploadedResponse = await uploadOnCloudinary(coverImgLocalPath);
      user.coverImage = uploadedResponse;
    } else {
      const uploadedResponse = await uploadOnCloudinary(coverImgLocalPath);
      user.coverImage = uploadedResponse;
    }

    await user.save();

    return res
      .status(200)
      .json(new ApiResponse(200, "coverImage upload successfully", user));
  } catch (error) {
    return res
      .status(400)
      .json(new ApiError(400, "Something went wrong", error));
  }
});

export { updateProfile, updatePassword, updateUserAvatar,updateUserCoverImg };
