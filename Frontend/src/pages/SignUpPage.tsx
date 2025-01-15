import '../styles/pages/SignUpPage.css';
import React, { useRef, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

export default function SignUp() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const fullNameRef = useRef<HTMLInputElement>(null);

  const [isSigningUp, setIsSigningUp] = useState(false);

  // Handle the form submission
  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSigningUp(true);

    // Access input values
    const fullName = fullNameRef.current?.value;
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    const confirmPassword = confirmPasswordRef.current?.value;

    // Check if the password and confirm password match
    if (password !== confirmPassword) {
      toast.error('Passwords do not match.', { position: 'bottom-center' });
      setIsSigningUp(false);
      return;
    }

    // Check if email and password are provided
    if (!email || !password || !fullName) {
      toast.error('Please fill in all required fields.', { position: 'bottom-center' });
      setIsSigningUp(false);
      return;
    }

    // Prepare the data to send to the backend
    const data = { fullName, email, password };
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    // Send the request to the backend
    try {
      const response = await fetch('http://localhost:3000/api/v1/user/signup', options);
      const result = await response.json();

      if (response.status === 400) {
        toast.error(result.message, { position: 'bottom-center' });
        setIsSigningUp(false);
        return;
      }

      toast.success('Registration Successful! Proceed to sign in.', { position: 'bottom-center' });

      // Redirect or clear inputs as needed
      window.location.href = '/signin';
    } catch (error) {
      toast.error('An error occurred. Please try again.', { position: 'bottom-center' });
      console.error(error);
      setIsSigningUp(false);
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <h1>Create an Account</h1>
        <p>Please enter your details</p>
        <form onSubmit={handleSignup}>
          <div className="form-group mb-2">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              ref={fullNameRef}
              placeholder="Enter your full name"
              className="form-control"
              required
            />
          </div>
          <div className="form-group mb-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              ref={emailRef}
              placeholder="Enter your email"
              className="form-control"
              required
            />
          </div>
          <div className="form-group mb-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              ref={passwordRef}
              placeholder="Enter your password"
              className="form-control"
              required
            />
          </div>
          <div className="form-group mb-2">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              ref={confirmPasswordRef}
              placeholder="Confirm your password"
              className="form-control"
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100 mt-2 mb-2"
            disabled={isSigningUp}
          >
            {isSigningUp ? 'Signing Up...' : 'Sign Up'}
          </button>
        </form>
        <p>
          Already have an account?
          <Link to="/signin" className="ps-2 text-decoration-none">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
