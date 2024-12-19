import { Cart, Person } from 'react-bootstrap-icons';
function Account() {
  return (
    <>
      <span>
        <Person />
        <select value="select">
          <option value="select">Account</option>
          <option>login</option>
          <option>Signup</option>
        </select>
      </span>

      <span>
        <Cart /> cart
      </span>
    </>
  );
}

export default Account;
