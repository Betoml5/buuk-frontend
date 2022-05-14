import { useCallback, useContext, useState } from "react";
import {
  addItemToTimelineAPI,
  addToLibraryAPI,
  findOne,
  removeFromLibraryAPI,
  signin,
  signup,
  updateAPI,
} from "../services/User";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Context from "../context/UserContext";
import { Alert } from "react-native";

export function useUser() {
  const { jwt, setJwt, user, setUser } = useContext(Context);
  const [state, setState] = useState({
    loading: false,
    error: false,
    message: "",
  });

  const navigation = useNavigation();

  const register = useCallback(
    async (user) => {
      try {
        setState({ loading: true, error: false });
        const response = await signup(user);
        if (!response.body) {
          setState({ loading: false, error: true, message: response });
          return;
        }
        setState({
          loading: false,
          error: false,
          message: "Usuario creado correctamente",
        });
        Alert.alert("Registro exitoso", "Usuario registrado correctamente");
        navigation.navigate("AccountNavigation", { screen: "Signin" });
      } catch (error) {
        setState({
          loading: false,
          error: true,
          message: "Hubo un error, intentalo mas tarde",
        });
        throw error;
      }
    },
    [navigation]
  );

  const login = useCallback(
    async (user) => {
      try {
        setState({ loading: true, error: false, message: "Cargando..." });
        const response = await signin(user);
        if (!response.body) {
          setState({ loading: false, error: true, message: response });
          return;
        }
        await AsyncStorage.setItem("user", JSON.stringify(response.body.user));
        await AsyncStorage.setItem("jwt", response.token);
        await AsyncStorage.setItem("refresh-jwt", response.refreshToken);
        setJwt(response.token);
        setUser(response.body.user);
        navigation.navigate("LibraryNavigation", { screen: "Library" });
        setState({ loading: false, error: false, message: "Login exitoso!" });
      } catch (error) {
        await AsyncStorage.removeItem("jwt");
        await AsyncStorage.removeItem("user");
        await AsyncStorage.removeItem("refresh-jwt", response.refreshToken);

        setState({
          loading: false,
          error: true,
          message: "Hubo un error, intentalo mas tarde",
        });
      }
    },
    [setJwt, setUser]
  );

  const logout = useCallback(async () => {
    try {
      setJwt(null);
      setUser(null);
      setState({ loading: true, error: false });
      await AsyncStorage.removeItem("user");
      await AsyncStorage.removeItem("jwt");
      setState({ loading: false, error: false });
      navigation.navigate("AccountNavigation", { screen: "Signin" });
    } catch (error) {
      setState({ loading: false, error: true });
    }
  }, [setJwt, setUser]);

  const profile = useCallback(async () => {
    try {
      const response = await findOne(id);
      return response.body;
    } catch (error) {
      throw Error(error);
    }
  }, []);

  const addToLibrary = async (bookId) => {
    try {
      setState({ loading: true, error: false });
      const response = await addToLibraryAPI(bookId);
      setUser(response.body);
      setState({ loading: false, error: false });
      return response.body;
    } catch (error) {
      setState({ loading: false, error: true });
    }
  };

  const removeFromLibrary = async (bookId) => {
    try {
      setState({ loading: true, error: false });
      const response = await removeFromLibraryAPI(bookId);
      setState({ loading: true, error: false });
      setUser(response.body);
    } catch (error) {
      setState({ loading: false, error: true });
    }
  };

  const addItemToTimeline = async (item) => {
    try {
      setState({ loading: true, error: true });
      const response = await addItemToTimelineAPI(item);
      setState({ loading: false, error: false });
      setUser(response.body);
      navigation.navigate("LibraryNavigation", { screen: "Library" });
    } catch (error) {
      setState({
        loading: false,
        error: true,
      });
    }
  };

  const update = async (id, user) => {
    try {
      setState({ loading: true, error: true });
      const response = await updateAPI(id, user);
      setUser(response.body);
      setState({
        loading: false,
        error: false,
        message: "Usuario actualizado correctamente",
      });
      // return response.body;
    } catch (error) {
      setState({
        loading: false,
        error: true,
        message: "Hubo un error, intentalo mas tarde",
      });
    }
  };

  return {
    isLogged: Boolean(jwt),
    isLoading: state.loading,
    hasError: state.error,
    stateMsg: state.message,
    setState,
    register,
    login,
    logout,
    profile,
    addToLibrary,
    removeFromLibrary,
    addItemToTimeline,
    user,
    setUser,
    update,
    jwt,
  };
}
