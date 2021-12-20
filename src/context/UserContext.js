import React from 'react'
import { useState } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"

const Context = React.createContext({});
export default Context;

export function UserContextProvider({ children }) {

    const [jwt, setJwt] = useState(() => AsyncStorage.getItem("jwt"));
    const [timeline, setTimeline] = useState(() => AsyncStorage.getItem("timeline"))
    const [user, setUser] = useState(() => AsyncStorage.getItem("user"))


    return (
        <Context.Provider value={{
            jwt,
            setJwt,
            timeline,
            setTimeline,
            user,
            setUser
        }}>
            {children}
        </Context.Provider>
    )
} 