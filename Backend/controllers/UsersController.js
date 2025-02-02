import User from "../models/UserSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { ObjectId } from "mongodb";

dotenv.config();
const Secret = process.env.JWTSECRET;

class UsersController {
  // Get user profile by token (after token validation)
  static async getUser(req, res) {
    try {
      // Get user ID from the decoded token payload
      const { id } = req.payload;

      // Find the user in the database using the ID from the token
      const user = await User.findOne({ _id: new ObjectId(id) });

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      return res.status(200).json({ user });
    } catch (error) {
      return res
        .status(500)
        .json({ message: `Error retrieving user: ${error.message}` });
    }
  }

  // User sign up
  static async signUpUser(req, res) {
    const { fullName, email, password } = req.body;

    if (!fullName || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    try {
      const user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ message: "User already exists" });
      }

      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(password, salt);

      const newUser = await User.create({
        fullName,
        email,
        password: hashPassword,
      });

      if (newUser) {
        return res.status(201).json({
          _id: newUser._id,
          fullName: newUser.fullName,
          email: newUser.email,
          message: "User signed up successfully",
        });
      }
    } catch (error) {
      return res
        .status(500)
        .json({ message: `Server error: ${error.message}` });
    }
  }

  // User sign in and generate JWT token
  static async signInUser(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).exec();

    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const payload = {
      exp: Math.floor(Date.now() / 1000) + 60 * 60, // Token expires in 1 hour
      id: user._id,
      fullName: user.fullName,
      role: user.role,
    };

    const token = await jwt.sign(payload, Secret, { algorithm: "HS256" });

    return res.status(200).json({
      message: `Hi ${user.fullName}, welcome back.`,
      token,
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        role: user.role,
      },
      expires_in: 3600, // Token expiration time (in seconds)
    });
  }

  // User logout (clear token from header)
  static async logoutUser(req, res) {
    req.headers["Authorization"] = null;
    return res
      .status(200)
      .json({ message: "You have successfully logged out" });
  }
}

export default UsersController;
