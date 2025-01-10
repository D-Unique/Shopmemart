import express from 'express';
import corsmiddleware from './middlewares/Cors.js';
import userRoutes from './routes/userRoutes.js'
import productRoutes from './routes/productRoutes.js'
import mongoose from 'mongoose';
import dotenv from 'dotenv';


// database connection
dotenv.config();
const url = process.env.DB_URL;
mongoose
.connect(url)
    .then(() => {
        console.log('Connected to DB');
    })
    .catch((err) => {
        console.log(err);
    });

// express server connection
const app = express()
app.use(corsmiddleware);
const port = process.env.PORT || 3000

app.use(express.json());
app.get('/', (req, res) => {
    res.send('Home page')
});
app.use('/shomemart.com/api/v1/user', userRoutes)
app.use('/shomemart.com/api/v1/product', productRoutes)



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})

export default mongoose;
