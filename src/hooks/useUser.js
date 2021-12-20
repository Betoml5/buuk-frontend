import Context from "../context/userContext"
import { useContext, useState } from "react"

export function useUser() {
    const { jwt, setJwt } = useContext(Context)
    const [state, setState] = useState({ loading: false, error: false });

    const signup = (email, password) => { };
    const login = () => { };
    const logout = () => { };
    const profile = () => { };

    const reading = async () => { };
    const timeline = async () => { };



    return {
        isLogged: Boolean(jwt),
        isLoading: state.loading,
        hasError: state.error,
        signup,
        login,
        logout,
        profile,
        reading,
        timeline
    }


}