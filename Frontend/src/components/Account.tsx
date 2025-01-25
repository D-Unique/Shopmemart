import { useContext, useState, useEffect } from 'react';
import CartContext from '../context/CartContext';
import ProductContext from '../context/ProductContext';
import { Cart } from "react-bootstrap-icons";
import "../styles/components/Account.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Account() {
  const { setOpenCart } = useContext(CartContext);
  const { getTotalProducts } = useContext(ProductContext);
  const totalProducts = getTotalProducts();

  const handleOpenCart = () => {
    setOpenCart(true);
  };

  const [user, setUser] = useState<any>(null); // State for authenticated user
  const [loading, setLoading] = useState<boolean>(true); // State for loading

  // Fetch the token from local storage
  const token = localStorage.getItem("token");

  useEffect(() => {
    // Debug: Log the retrieved token
    console.log("Retrieved token from localStorage:", token);

    // Function to validate token
    const checkToken = async () => {
      if (!token) {
        console.log("No token found, skipping validation.");
        setLoading(false); // No token, no need to check
        return;
      }

      try {
        console.log("Validating token...");

        const response = await fetch("http://localhost:3000/api/v1/user/validateToken", {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        });

        // Debug: Log response status
        console.log("Response status:", response.status);

        if (!response.ok) {
          console.error("Token validation failed with status:", response.status);
          throw new Error("Token validation failed");
        }

        const result = await response.json();

        // Debug: Log the result from the API
        console.log("Token validation successful. User data:", result);

        setUser(result.user); // Save user data
      } catch (err) {
        console.error("Token validation error:", err);
        localStorage.removeItem("token"); // Remove invalid token
        setUser(null); // Ensure user is set to null if validation fails
      } finally {
        setLoading(false); // Stop loading spinner
        console.log("Token validation process completed.");
      }
    };

    checkToken();
  }, [token]); // Dependency on token to check each time it changes

  // Handle logout
  const handleLogout = () => {
    console.log("Logging out...");
    localStorage.removeItem("token");
    setUser(null); // Reset user state
  };

  if (loading) {
    console.log("Still loading...");
    return <div>Loading...</div>; // Show loading spinner
  }

  console.log("Rendering Account component. User:", user);

  // need to rework the item to render when user is signed in ill used account and sign out for now
  // i might add a toast like welcome user.fullName and change the other toast message to successfully signed in
  return (
    <div id="account" className="d-flex m-2 justify-content-between align-items-center">
      {user ? (
        <>
          <Link to="/signin" className="p-2">
            Account
          </Link>
          <Link to="/signup" onClick={handleLogout} className="p-2">
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
      <Button className="account-cart ms-5 rounded-circle" variant="Outline-primary" onClick={() => handleOpenCart()}>
        <Cart className="account-cart-icon" />
        <div className="account-cart-button rounded-circle bg-warning d-flex justify-content-center align-items-center">
          {totalProducts}
        </div>
      </Button>
    </div>
  );
}

export default Account;
