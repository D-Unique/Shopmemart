import express from 'express';
import UsersController from '../controllers/UsersController.js'
import authenticateToken from '../middlewares/AuthenticateJwtToken.js';

const router = express.Router()

router.post('/register', UsersController.registerUser)
router.post('/login', UsersController.loginUser)
router.get('/', authenticateToken, UsersController.getUser)

export default router;
