import { useContext, useState, useEffect } from "react";
import CartContext from "../context/CartContext";
import ProductContext from "../context/ProductContext";
import { Cart } from "react-bootstrap-icons";
import "../styles/components/Account.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { validateToken } from "../util/checkToken"; // Import the utility

interface User {
  id: string;
  name: string;
  email: string;
  [key: string]: any;
}

const Account: React.FC = () => {
  const { setOpenCart, openCart } = useContext(CartContext);
  const { getTotalProducts } = useContext(ProductContext);
  const totalProducts = getTotalProducts();

  const [user, setUser] = useState<User | null>(null); // State for authenticated user
  const [loading, setLoading] = useState<boolean>(true); // State for loading

  // Fetch the token from local storage
  const token = localStorage.getItem("token");

  useEffect(() => {
    console.log("Retrieved token from localStorage:", token);

    const fetchUser = async () => {
      const result = await validateToken(token); // Use the utility
      if (result) {
        setUser(result.user); // No error here because the type matches
      } else {
        localStorage.removeItem("token"); // Remove invalid token
        setUser(null);
      }
      setLoading(false);
    };

    fetchUser();
  }, [token]);

  // Handle logout
  const handleLogout = () => {
    console.log("Logging out...");
    localStorage.removeItem("token");
    setUser(null);
  };

  if (loading) {
    console.log("Still loading...");
    return <div>Loading...</div>;
  }

  console.log("Rendering Account component. User:", user);

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
