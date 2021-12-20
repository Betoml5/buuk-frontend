import Context from "../context/userContext"
import { useContext, useState } from "react"
import { signup } from "../services/User";
import { Alert } from "react-native";

export function useUser() {
    const { jwt, setJwt } = useContext(Context)
    const [state, setState] = useState({ loading: false, error: false });

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

        } catch (error) {

        }
    };
    const logout = () => { };
    const profile = () => { };

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
        timeline
    }


}