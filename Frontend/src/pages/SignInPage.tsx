import '../styles/pages/SignInPage.css';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useRef, useState } from 'react';

export default function SignIn() {
  const [isLoading, setIsLoading] = useState(false); // State for loading
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const rememberRef = useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    // On page load, check if username is stored in localStorage
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');
    if (storedEmail && storedPassword && emailRef.current && passwordRef.current && rememberRef.current) {
      emailRef.current.value = storedEmail;
      passwordRef.current.value = storedPassword;
      rememberRef.current.checked = true;
    }
  }, []);

  const handleSignin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const url = 'http://localhost:3000/api/v1/user/signin';

    // Access input values
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    const remember = rememberRef.current?.checked;

    if (!email || !password) {
      toast.error('Please fill in all required fields.', { position: 'bottom-center' });
      setIsLoading(false);
      return;
    }

    const data = { email, password };
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    try
    {
      const response = await fetch(url, options);
      const result = await response.json();

      if (response.status === 400) {
        toast.error(result.message, { position: 'bottom-center' });
        setIsLoading(false);
        return;
      }

      toast.success(result.message);

      if (remember) {
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
      } else {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
      }

      // Clear inputs
      if (emailRef.current) emailRef.current.value = '';
      if (passwordRef.current) passwordRef.current.value = '';
      if (rememberRef.current) rememberRef.current.checked = false;

      window.location.href = '/';
    }
    catch (error)
    {
      toast.error('An error occurred. Please try again.', { position: 'bottom-center' });
      console.error(error);
    }
    // Set loading to false after the request ends
    finally
    {
      setIsLoading(false);
    }
  };

  return (
    <div className="signin-page">
      <div className="signin-container">
        <h1>Welcome back</h1>
        <p>Please enter your details</p>
        <form onSubmit={(e) => handleSignin(e)}>
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
          <input type="checkbox" id="remember" ref={rememberRef} />
          <label className="remember-me ps-2" htmlFor="remember">
            Remember me
          </label>
          <button
            type="submit"
            className="btn btn-primary w-100 mt-2 mb-2"
            disabled={isLoading}
          >
            {isLoading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
        <p>
          Don't have an account?
          <Link to="/signup" className="ps-2 text-decoration-none">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
