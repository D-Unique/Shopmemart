import '../styles/pages/SignUpPage.css';
import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <div className="signup-page">
      <div className="signup-container">
        <h1>Create an Account</h1>
        <p>Please enter your details</p>
        <form>
          <div className="form-group mb-2">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="form-control"
              required
            />
          </div>
          <div className="form-group mb-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
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
              placeholder="Confirm your password"
              className="form-control"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100 mt-2 mb-2">
            Sign Up
          </button>
        </form>
        <p>Already have an account?
          <Link to="/signin" className='ps-2 text-decoration-none'>
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}