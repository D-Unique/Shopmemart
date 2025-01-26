import React, { useState } from 'react';
import UserContext from './UserContext';
import { validateToken } from '../util/checkToken';
import { User, UserProviderProps } from '../Enums';
import Unauthorised from '../components/ErrorConponent/Unauthorised';


function UserContextProvider({ children } : UserProviderProps) {
    const [dbuser, setUser] = useState<User>({} as User);

    const getUser = async () => {
        const token = localStorage.getItem("token");
        if (!token) {
            window.location.href = "/signin";
        }
        try {
            const result = await validateToken(token);
            if (result && result.user) {
                const { user } = result;
                setUser(user);
                return user;
            }
            window.location.href = "/signin";
        } catch (error) {
            return (
                <Unauthorised error={error } />
            )
            
        }
    }
    const  UserName = dbuser.fullName
    const UserEmail = dbuser.email
    const Role = dbuser.role

  return (
    <UserContext.Provider value={{ getUser, UserName, UserEmail, Role }}>
      {children}    
      
    </UserContext.Provider>
  )
}

export default UserContextProvider

