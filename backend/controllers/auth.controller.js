import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.model.js";

const generateAccessAndRefereshTokens = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(
      500,
      "Something went wrong while generating referesh and access token"
    );
  }
};

export const register = asyncHandler(async (req, res) => {
  try {
    const { email, username, fullName, password } = req.body;

    if (!email && !username && !fullName && !password) {
      throw new ApiError(400, "All fields are required");
    }

    const existedUser = await User.findOne({
      $or: [{ username }, { email }],
    });

    if (existedUser) {
      throw new ApiError(400, "All fields are required");
    }

    const user = await User.create({
      fullName,
      email,
      username,
      password,
    });

    const createdUser = await User.findById(user._id).select("-password");

    if (!createdUser) {
      throw ApiError(500, "Something went wrong while registering the user");
    }

    const { accessToken, refreshToken } = await generateAccessAndRefereshTokens(
      createdUser._id
    );

    const options = {
      httpOnly: true,
      secure: false,
    };

    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", refreshToken, options)
      .json(new ApiResponse(200, "user login successfully", createdUser));
  } catch (error) {
    return res
      .status(400)
      .json(new ApiError(400, "Something went wrong", error));
  }
});

export const login = asyncHandler(async (req, res) => {
  try {
    const { email, username, password } = req.body;

    if (!username && !email && !password) {
      throw new ApiError(400, "username or email is required");
    }

    const user = await User.findOne({
      $or: [{ username }, { email }],
    });

    if (!user) {
      throw new ApiError(404, "User does not exist");
    }

    const isPasswordValid = await user.isPasswordCorrect(password);

    if (!isPasswordValid) {
      throw new ApiError(401, "Invalid user credentials");
    }

    const { accessToken, refreshToken } = await generateAccessAndRefereshTokens(
      user._id
    );

    const loggedInUser = await User.findById(user._id).select("-password");

    const options = {
      httpOnly: true,
      secure: false,
    };

    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", refreshToken, options)
      .json(new ApiResponse(200, "user login successfully", loggedInUser));
  } catch (error) {
    return res
      .status(400)
      .json(new ApiError(400, "Something went wrong", error));
  }
});

export const logout = asyncHandler(async (req, res) => {
  try {
    return res
      .status(200)
      .cookie("accessToken","", {maxAge:0})
      .cookie("refreshToken","", {maxAge:0})
      .json(new ApiResponse(200, "User logout Successfully", {}));
  } catch (error) {
    return res
      .status(400)
      .json(new ApiError(400, "Something went wrong", error));
  }
});
