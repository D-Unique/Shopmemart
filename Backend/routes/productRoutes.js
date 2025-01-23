import express from 'express';
import multer from 'multer'
const upload = multer()
import ProductsController from '../controllers/ProductController.js'
const router = express.Router()


router.get('/', ProductsController.getProduct)
router.post('/create', upload.none(), ProductsController.createProduct)



export default router;
