import { useContext, useEffect } from 'react'
import UserContext from '../context/UserContext';


function UserDashBoard() {
  const { getUser} = useContext(UserContext);
  useEffect(() => {
    const verifyUser = async () => {
       await getUser();
    }
    verifyUser();
    
  }, [])


  return (
    <div>
      <h1> User DashBoard</h1>
    </div>
  )
}

export default UserDashBoard

