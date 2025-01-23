import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    countInStock: {
        type: Number,
        required: true
    },
    outofStock: {
        type: Boolean,
        default: false,
        
    },
    rating: {
        type: Number,
    },
    category: {
        type: String,
        required: true
    }
})
mongoose.model('Product', productSchema);
const Product = new mongoose.model('Product', productSchema);

export default Product;
