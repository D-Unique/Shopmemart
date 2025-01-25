import express from "express";
import validateToken from "../middlewares/ValidateToken.js"; // Import the middleware
import UsersController from "../controllers/UsersController.js"; // Import controller

const router = express.Router();

// Protect the "getUser" route with token validation middleware
router.get("/validateToken", validateToken, UsersController.getUser);

// Other user-related routes
router.post("/signup", UsersController.signUpUser);
router.post("/signin", UsersController.signInUser);
router.post("/logout", validateToken, UsersController.logoutUser);

export default router;
