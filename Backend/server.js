import express from 'express';
import userRoutes from './routes/userRoutes.js'
import productRoutes from './routes/productRoutes.js'

const app = express()
const port = process.env.PORT || 3000


app.get('/', (req, res) => {
    res.send('Home page')
});
app.use('/user', userRoutes)
app.use('/product', productRoutes)



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})
