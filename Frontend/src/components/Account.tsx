import { useContext, useState, useEffect } from "react";
import CartContext from "../context/CartContext";
import ProductContext from "../context/ProductContext";
import { Cart } from "react-bootstrap-icons";
import "../styles/components/Account.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import BackendLogout from "../util/BackendLogout";

const Account: React.FC = () => {
  const { setOpenCart, openCart } = useContext(CartContext);
  const { getTotalProducts } = useContext(ProductContext);
  const totalProducts = getTotalProducts();

  const [user, setUser] = useState<boolean>(false);
  useEffect(() => {

    const fetchUser =  () => {
      const token = localStorage.getItem("token");
      if (token) {
        setUser(true);
      } else {
        localStorage.removeItem("token");
        setUser(false);
      }
    
    };

    fetchUser();
  }, []);

  // Handle logout
  const handleLogout =  async() => {
    await BackendLogout();
    setUser(false);
  };

  return (
    <div id="account" className="d-flex m-2 justify-content-between align-items-center">
      {user ? (
        <>
          <Link to="/user" className="p-2">
            Account
          </Link>
          <Link to="/" onClick={handleLogout} className="p-2">
            Sign Out
          </Link>
        </>
      ) : (
        <>
          <Link to="/signin" className="p-2">
            Sign In
          </Link>
          <Link to="/signup" className="p-2">
            Sign Up
          </Link>
        </>
      )}
      <Button
        className="account-cart ms-5 rounded-circle"
        variant="Outline-primary"
        onClick={() => setOpenCart(!openCart)}
      >
        <Cart className="account-cart-icon" />
        <div className="account-cart-button rounded-circle bg-warning d-flex justify-content-center align-items-center">
          {totalProducts}
        </div>
      </Button>
    </div>
  );
};

export default Account;
