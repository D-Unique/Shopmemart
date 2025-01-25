import dotenv from 'dotenv';
import { json } from 'express';
dotenv.config();

class Transaction {
    static async initialize (req, res) {
        const { amount, email } = req.body;
        if (!amount || !email) {
            return res.status(400).json({ message: 'Amount and email are required' });
        }
        const data = json.stringify({
                email,
            amount,
            callback_url: 'https://84b7-197-210-226-186.ngrok-free.app/verify',
            });
             
        const options = {
            hostname: 'api.paystack.co',
            port: 443,
            path: '/transaction/initialize',
            method: 'POST',
            headers: {
              Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
              'Content-Type': 'application/json'
            },
            body: data
        }
            try {
            const response = await fetch('https://api.paystack.co/transaction/initialize', options)
            const responseData = await response.json()
            res.status(200).json(responseData)
            } catch (error) {
                res.status(500).json({ message: error.message });
            }
    }

}

export default Transaction;
