import React from "react";
type User = {
    name: String,
    email: String,
    password: String,
    role?: String
    address?: String,  
}

type AuthContextProps = {
    AuthToken?: string | null
    getUser: () => User
    loginuser: () => 
    logoutuser: () =>
}

AuthContext = React.createContext({})
