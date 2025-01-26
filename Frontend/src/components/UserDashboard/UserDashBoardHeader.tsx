import {Link} from 'react-router-dom';
import { s } from 'framer-motion/client';

const UserDashBoardHeader = () => {
  return (
      <>
          <div style={{ }}>
                  <span>
              
                  <h1 style={{ fontSize: 'large' }}>Emmanuel</h1>
                  <p>User</p>
                </span>
          </div>
          
          <div>
          <img style={{display: 'block'}} src="https://via.placeholder.com/150" alt="profile" />
        
            <Link to={'/'}>Logout</Link>
        </div >
    </>
  )
}

export default UserDashBoardHeader

