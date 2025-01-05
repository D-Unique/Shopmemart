import express from 'express';
import UsersController from '../controllers/UsersController.js'

const router = express.Router()

router.get('/', UsersController.getUser)

export default router;
