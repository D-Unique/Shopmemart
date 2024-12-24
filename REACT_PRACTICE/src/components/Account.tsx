import { Cart, Person } from 'react-bootstrap-icons';
import '../styles/components/Account.css';
function Account() {
  return (
    < div id='account'>
      <span className='mx-2'>
        <Person />
        <select  className="register" value="select">
          <option value="select">Account</option>
          <option>login</option>
          <option>Signup</option>
        </select>
      </span>

      <span className='cart'>
        <Cart /> cart
      </span>
    </div>
  );
}

export default Account;
