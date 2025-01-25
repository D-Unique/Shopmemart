import { Link } from 'react-router-dom';
import '../styles/pages/PaymentVarify.css';
function PaymentVarify() {
  localStorage.removeItem('cartproducts');
  return (
    <div className="PaymentVarify">
      <h2 className='mb-5'>Varification Successful</h2>
      <p>Thank you for your payment. Your order has been placed successfully.</p>
      <p>You will receive an email with the order details.</p>
      <p>Thank you for shopping with us.</p>
      <Link to={"/"}>Go to Home</Link>
      
    </div>
  )
}

export default PaymentVarify
