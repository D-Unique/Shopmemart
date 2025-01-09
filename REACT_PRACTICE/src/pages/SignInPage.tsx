import '../styles/pages/SignInPage.css';
import { Link } from 'react-router-dom';
import { toast, t } from 'sonner';

export default function SignIn() {

  // On page load, check if username is stored in localStorage
  window.addEventListener('load', () => {
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');
    if (storedEmail && storedPassword) {
      const email = document.getElementById('email') as HTMLInputElement;
      const password = document.getElementById('password') as HTMLInputElement;
      const remember = document.getElementById('remember') as HTMLInputElement;
      email.value = storedEmail;
      password.value = storedPassword;
      remember.checked = true;
    }
  });


  const handleSingin = async (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const baseurl = 'http://localhost:3000';
    const path = '/shomemart.com/api/v1/user/login';
    const url = baseurl + path;
    const email = document.getElementById('email') as HTMLInputElement;
    const password = document.getElementById('password') as HTMLInputElement;
    const remember = document.getElementById('remember') as HTMLInputElement;
    const data = {
      email: email.value,
      password: password.value
    };
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
    const request = new Request(url, options);
    
    const response = await fetch(request)
    console.log(response.status);
    if (response.status === 400) {
      const result = await response.json();
      console.log(result.message);
      toast.error(result.message, {
        position: 'bottom-center'
      });
    }
    const result = await response.json();
    toast.success(result.message);

    if (remember.checked) {
      localStorage.setItem('email', email.value);
      localStorage.setItem('password', password.value);
    } else {
      localStorage.removeItem('email');
      localStorage.removeItem('password');
    }
    email.value = '';
    password.value = '';
    remember.checked = false;
    window.location.href = '/';
  
  }
  
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
          <button type="submit" className="btn btn-primary w-100 mt-2 mb-2" onClick={(e) => handleSingin(e)}>
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
