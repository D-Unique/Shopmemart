import '../styles/pages/UserProfile.css';
import { useContext } from 'react';
import UserContext from '../context/UserContext';

function UserProfile() {
  const { getUser, UserName, UserEmail } = useContext(UserContext);
    const user = getUser();
  return (
    <div >
      <h2 className='mb-5'>User Profile</h2>
      <div className="UserProfile">
        <div className="UserProfile-Header">
          <h2>Profile</h2>
          
        </div>
        <div className="UserProfile-Content">
          <div className="UserProfile-Content-Item">
            <label>Name:</label>
            <p>{ UserName}</p>
          </div>
          <div className="UserProfile-Content-Item">
            <label>Email:</label>
            <p>{ UserEmail}</p>
          </div>
    </div>
      
      </div>
    </div>
  )
}

export default UserProfile

