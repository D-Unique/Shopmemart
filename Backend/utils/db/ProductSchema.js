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
        required: true
    },
    rating: {
        type: Number,
    },
    category: {
        type: String,
        required: true
    }
})

export default mongoose.model('Product', productSchema);
