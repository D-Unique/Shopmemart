import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const Secret = process.env.JWTSECRET;

if (!Secret) {
  throw new Error("JWTSECRET environment variable is not set");
}

async function authenticateToken(req, res, next) {
  const authheader = req.headers["authorization"];
  const token = authheader && authheader.split(" ")[1];

  // Check if the token is missing
  if (!token) {
    return res.status(401).json({
      message: "Unauthorized Access: Token is required",
    });
  }

  try {
    const payload = await jwt.verify(token, Secret, { algorithms: ["HS256"] });
    req.payload = payload;
    next(); // Token is valid, continue with the next middleware
  } catch (err) {
    return res.status(403).json({
      message: "Forbidden: Invalid or expired token",
    });
  }
}

export default authenticateToken;
