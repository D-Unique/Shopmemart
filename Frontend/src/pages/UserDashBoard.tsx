import { useEffect, useState } from 'react'
import { validateToken } from '../util/checkToken';
import { User } from '../Enums'; 

function UserDashBoard() {
  const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
  
    // Fetch the token from local storage
    const token = localStorage.getItem("token"); 
  useEffect(() => {
    console.log("Retrieved token from localStorage:", token);

    const fetchUser = async () => {
      const result = await validateToken(token);
      if (result) {
        setUser(result.user);
      } else {
        localStorage.removeItem("token");
        setUser(null);
      }
      setLoading(false);
    };

    fetchUser();
  }, [token]);
  return (
    <div>
      <h1> User DashBoard</h1>
    </div>
  )
}

export default UserDashBoard

