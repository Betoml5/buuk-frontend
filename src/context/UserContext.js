import { createContext, useState } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"

const Context = createContext({});


export const UserContextProvider = ({ children }) => {

    const [jwt, setJwt] = useState(() => AsyncStorage.getItem("jwt"));
    const [timeline, setTimeline] = useState(() => AsyncStorage.getItem("timeline"))



    return (
        <Context.Provider value={{
            jwt,
            setJwt,
            timeline,
            setTimeline
        }}>
            {children}
        </Context.Provider>
    )
} 