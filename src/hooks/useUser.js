import Context from "../context/userContext"
import { useContext, useState } from "react"
import { addToLibraryAPI, findOne, signin, signup } from "../services/User";
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useNavigation } from "@react-navigation/native";


export function useUser() {
    const { jwt, setJwt, user, setUser } = useContext(Context)
    const [state, setState] = useState({ loading: false, error: false });

    const navigation = useNavigation();

    const register = async (user) => {
        try {
            setState({ loading: true, error: false })
            const response = await signup(user);
            setState({ loading: false, error: false })
            return response;
        } catch (error) {
            setState({ loading: false, error: true })
            return error
        }
    };
    const login = async (user) => {
        try {
            setState({ loading: true, error: false });
            const response = await signin(user);
            setJwt(response.token);
            setUser(response.body);
            await AsyncStorage.setItem("user", JSON.stringify(response.body));
            await AsyncStorage.setItem("jwt", response.token)
            navigation.navigate("LibraryNavigation", { screen: "Library" })
            console.log("response", response)
            setState({ loading: false, error: false })

        } catch (error) {
            await AsyncStorage.removeItem("jwt");
            await AsyncStorage.removeItem("user");
            setState({ loading: false, error: true })
            console.log(error)
        }
    };
    const logout = async () => {
        setJwt(null);
        setUser(null);
        await AsyncStorage.removeItem("user")
        await AsyncStorage.removeItem("jwt")
        navigation.navigate("AccountNavigation", { screen: "Signin" })
    };
    const profile = async (id) => {
        try {
            const response = await findOne(id);
            return response.body;
        } catch (error) {
            return error;
        }
    };

    const addToLibrary = async (id, bookId) => {
        try {
            const response = await addToLibraryAPI(id, bookId);
            return response.body;
        } catch (error) {
            return error;
        }
    }

    const reading = async () => { };
    const timeline = async () => { };



    return {
        isLogged: Boolean(jwt),
        isLoading: state.loading,
        hasError: state.error,
        register,
        login,
        logout,
        profile,
        reading,
        timeline,
        addToLibrary,
        user,

    }


}