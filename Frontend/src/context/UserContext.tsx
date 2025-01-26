import React from 'react'
import { User } from '../Enums';


type UserContextType = {
    getUser: () =>  Promise<{ user: User; } | JSX.Element |  null | undefined>;
    UserName: string;
    UserEmail: string;
    
}

const UserContext = React.createContext({} as UserContextType) 

export default UserContext
