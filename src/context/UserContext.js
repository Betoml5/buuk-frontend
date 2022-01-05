import React, { useEffect } from "react";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { findOne } from "../services/User";

const Context = React.createContext({});
export default Context;

export function UserContextProvider({ children }) {
  const [jwt, setJwt] = useState("");
  const [user, setUser] = useState(null);

  const fetchData = async () => {
    try {
      const storageUser = await AsyncStorage.getItem("user");
      const storageJwt = await AsyncStorage.getItem("jwt");

      if (storageUser !== null && storageJwt !== null) {
        let parsedUser = JSON.parse(storageUser);
        setUser(parsedUser);
        setJwt(storageJwt);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Context.Provider
      value={{
        jwt,
        setJwt,
        user,
        setUser,
      }}
    >
      {children}
    </Context.Provider>
  );
}
