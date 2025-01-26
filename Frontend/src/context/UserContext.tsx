import React from 'react'

type User = {
}

type UserContextType = {
    getUser: () => ;
}

const UserContext = React.createContext({} as any) 
