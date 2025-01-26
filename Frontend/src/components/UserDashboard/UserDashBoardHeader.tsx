import UserContext from '../../context/UserContext';
import { useContext } from 'react';
const UserDashBoardHeader = () => {
  const { UserName } = useContext(UserContext);


  return (
      <>
          <div>
              <span>
              
          <h1 style={{ fontSize: 'large' }}>{ UserName }</h1>
                  <p>Role:  User</p>
                </span>
          </div>
          
          <div>
          <img style={{display: 'block'}} src="https://via.placeholder.com/150" alt="profile" />
        </div >
    </>
  )
}

export default UserDashBoardHeader

