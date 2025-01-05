import express from 'express';
import ProductsController from '../controllers/ProductController.js'
const router = express.Router()


router.get('/', ProductsController.getProduct)



export default router;
