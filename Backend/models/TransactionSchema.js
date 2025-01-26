import mongoose, { Schema } from 'mongoose';

const transactionSchema = mongoose.Schema({
    UserId: {
        type: Schema.Types.ObjectId, ref: 'User',
        required: true
    },
    reference: {
        type: String,
        required: true
    },
    totalAmount: {
        type: Number,
        required: true
    },
    paymentMethod: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: "pending"
    },
});


export default mongoose.model('Transaction', transactionSchema);
