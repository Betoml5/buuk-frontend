import Context from "../context/userContext"
import { useCallback, useContext, useState } from "react"
import { addItemToTimelineAPI, addToLibraryAPI, findOne, libraryAPI, removeFromLibraryAPI, signin, signup } from "../services/User";
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useNavigation } from "@react-navigation/native";


export function useUser() {
    const { jwt, setJwt, user, setUser } = useContext(Context)
    const [state, setState] = useState({ loading: false, error: false });

    const navigation = useNavigation();


    const register = useCallback(async () => {
        try {
            setState({ loading: true, error: false })
            const response = await signup(user);
            setState({ loading: false, error: false })
            return response;
        } catch (error) {
            setState({ loading: false, error: true })
            return error
        }
    }, [navigation])

    const login = useCallback(async (user) => {
        try {
            setState({ loading: true, error: false });
            const response = await signin(user);
            await AsyncStorage.setItem("user", JSON.stringify(response.body.user));
            await AsyncStorage.setItem("jwt", response.token)
            setJwt(response.token);
            setUser(response.body.user);
            navigation.navigate("LibraryNavigation", { screen: "Library" })
            setState({ loading: false, error: false })

        } catch (error) {
            await AsyncStorage.removeItem("jwt");
            await AsyncStorage.removeItem("user");
            setState({ loading: false, error: true })
        }
    }, [setJwt, setUser])


    const logout = useCallback(async (user) => {
        try {
            setJwt(null);
            setUser(null);
            setState({ loading: true, error: false })
            await AsyncStorage.removeItem("user")
            await AsyncStorage.removeItem("jwt")
            setState({ loading: false, error: false, })
            navigation.navigate("AccountNavigation", { screen: "Signin" })
        } catch (error) {
            setState({ loading: false, error: true });
            throw new Error(error.message)
        }
    }, [setJwt, setUser])


    const profile = useCallback(async () => {
        try {
            const response = await findOne(id);
            return response.body;
        } catch (error) {
            return error;
        }
    }, [])




    const addToLibrary = async (id, bookId) => {
        try {
            setState({ loading: true, error: false });
            const response = await addToLibraryAPI(id, bookId);
            setState({ loading: false, error: false });
            return response.body;
        } catch (error) {
            setState({ loading: false, error: true })

            return error;
        }
    }

    const removeFromLibrary = async (id, bookId) => {
        try {
            setState({ loading: true, error: false })
            const response = await removeFromLibraryAPI(id, bookId);
            setState({ loading: true, error: false })
            return response.body;
        } catch (error) {
            setState({ loading: false, error: true })
            return error;
        }
    }

    const addItemToTimeline = async (id, item) => {
        try {
            setState({ loading: true, error: true });
            const response = await addItemToTimelineAPI(id, item);
            setState({ loading: false, error: false });
            return response.body;
        } catch (error) {
            setState({ loading: false, error: true });
            return error;
        }
    }

    const reading = async () => { };



    return {
        isLogged: Boolean(jwt),
        isLoading: state.loading,
        hasError: state.error,
        register,
        login,
        logout,
        profile,
        reading,
        addToLibrary,
        removeFromLibrary,
        addItemToTimeline,
        user,
        setUser,

    }


}