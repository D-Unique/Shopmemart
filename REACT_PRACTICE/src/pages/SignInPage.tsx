import '../styles/pages/SignInPage.css';
import { Link } from 'react-router-dom';

export default function SignIn() {
  return (
    <div className="signin-page">
      <div className="signin-container">
        <h1>Welcome back</h1>
        <p>Please Enter your details</p>
        <form>
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
          <input
            type="checkbox"
            id="remember"
          />
          <label className="remember-me ps-2" htmlFor="remember">Remember me</label>
          <button type="submit" className="btn btn-primary w-100 mt-2 mb-2">
            Sign In
          </button>
        </form>
        <p>Don't have an account?
          <Link to="/signup" className='ps-2 text-decoration-none'>
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}