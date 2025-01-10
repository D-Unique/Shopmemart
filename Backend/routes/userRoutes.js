import express from 'express';
import UsersController from '../controllers/UsersController.js'
import authenticateToken from '../middlewares/AuthenticateJwtToken.js';

const router = express.Router()

router.post("/signup", UsersController.signUpUser);
router.post("/signin", UsersController.signInUser);
router.get('/', authenticateToken, UsersController.getUser)

export default router;
