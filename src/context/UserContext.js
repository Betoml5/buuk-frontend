import React from 'react'
import { useState } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"

const Context = React.createContext({});
export default Context;

export function UserContextProvider({ children }) {

    const [jwt, setJwt] = useState(async () => await AsyncStorage.getItem("jwt"));
    const [user, setUser] = useState(async () => await AsyncStorage.getItem("user"))

    return (
        <Context.Provider value={{
            jwt,
            setJwt,
            user,
            setUser
        }}>
            {children}
        </Context.Provider>
    )
} 