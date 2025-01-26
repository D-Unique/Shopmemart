import { useContext } from 'react'
import UserContext from '../context/UserContext';
// import reactoastify from 'react-toastify';
// import { User } from '../Enums'; 

function UserDashBoard() {
  const { getUser, UserName, UserEmail } = useContext(UserContext);
  const user = getUser();
  

  return (
    <div>
      <h1> User DashBoard</h1>
    </div>
  )
}

export default UserDashBoard

