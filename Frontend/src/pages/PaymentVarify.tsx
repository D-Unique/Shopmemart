import { Link } from 'react-router-dom';
import '../styles/pages/PaymentVarify.css';
import UserContext from '../context/UserContext';
import { useContext } from 'react';
// import { useEffect } from 'react';
function PaymentVarify() {
  // Menual route to protection
  const { getUser } = useContext(UserContext);
  getUser();
  // remove cart products from session storage
  sessionStorage.removeItem('cartproducts');
  // const [posts, setPosts] = useState<string>('');
  // const [searchParems, setSearchParams] = useSearchParams()

  // useEffect(() => {
  //   if (searchParems.has('reference')) {
  //     const reference = searchParems.get('reference') as string;

  //     const VerifyPayment = async () => {
  //       const form = new FormData();
  //       form.append('reference', reference);
  //       const response = await fetch(`http://localhost:5000/api/payment/verify/`, {
  //         method: 'POST',
  //         body: form
  //       });
  //       const data = await response.json();
  //       setPosts(data.message);
  //     }
  //   }
  // }
  // , [searchParems]);
    

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
