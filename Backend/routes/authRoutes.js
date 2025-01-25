import express from "express";
import authenticateToken from "../middlewares/AuthenticateJwtToken.js";

const router = express.Router();

// Route to check if the token is valid
router.get("/check-token", authenticateToken, (req, res) => {
  // If the middleware passes, the user is authenticated
  res.status(200).json({ message: "Token is valid" });
});

export default router;
