import express from 'express';
import UsersController from '../controllers/UsersController.js'

const router = express.Router()

router.post('/register', UsersController.registerUser)
router.post('/login', UsersController.loginUser)
router.get('/', UsersController.getUser)

export default router;
