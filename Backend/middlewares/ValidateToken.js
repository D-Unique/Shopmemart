import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/UserSchema.js"; // Import the user schema

dotenv.config();
const Secret = process.env.JWTSECRET; // Secret key for JWT

const validateToken = async (req, res, next) => {
  // Get token from Authorization header (Bearer <token>)
  const token = req.header("Authorization")?.replace("Bearer ", "");

  // If no token provided, deny access
  if (!token) {
    return res
      .status(403)
      .json({ message: "Access denied. No token provided." });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, Secret);

    // Attach the decoded token (user information) to the request
    req.payload = decoded;

    // Check if the user exists in the database based on token ID
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Proceed to the next middleware or route handler
    next();
  } catch (error) {
    return res.status(400).json({ message: "Invalid or expired token" });
  }
};

export default validateToken;
