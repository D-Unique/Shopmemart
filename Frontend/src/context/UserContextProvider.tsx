import React, { useState } from 'react';
import UserContext from './UserContext';
import { validateToken } from '../util/checkToken';
import { User, UserProviderProps } from '../Enums';
import Unauthorised from '../components/ErrorConponent/Unauthorised';


function UserContextProvider({ children } : UserProviderProps) {
    const [user, setUser] = useState<User>({} as User);

    const getUser = async () => {
        const token = localStorage.getItem("token");
        if (!token) {
            window.location.href = "/signin";
        }
        try {
            const User = await validateToken(token);
            if (user) {

                setUser(user);
                return User;
            }
            window.location.href = "/signin";
        } catch (error) {
            return (
                <Unauthorised error={error } />
            )
            
        }
    }
    const  UserName = user.name
    const UserEmail = user.email

  return (
    <UserContext.Provider value={{ getUser, UserName, UserEmail}}>
      {children}    
      
    </UserContext.Provider>
  )
}

export default UserContextProvider

