import React, { useEffect } from "react";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Context = React.createContext({});
export default Context;

export function UserContextProvider({ children }) {
  const [jwt, setJwt] = useState("");
  const [user, setUser] = useState(null);
  const [refreshToken, setRefreshToken] = useState("");
  const fetchData = async () => {
    try {
      const storageUser = await AsyncStorage.getItem("user");
      const storageJwt = await AsyncStorage.getItem("jwt");
      const storageRefreshToken = await AsyncStorage.getItem("refresh-jwt");

      if (storageUser !== null && storageJwt !== null) {
        let parsedUser = JSON.parse(storageUser);
        setUser(parsedUser);
        setJwt(storageJwt);
        setRefreshToken(storageRefreshToken);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();

    return () => {
      setUser(null);
      setJwt("");
      setRefreshToken("");
    };
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
