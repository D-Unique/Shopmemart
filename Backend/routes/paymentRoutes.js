import express from 'express';
import Transaction from '../controllers/PaymentController.js';
const router = express.Router();


router.post('/initailized', Transaction.initialize);

export default router;
