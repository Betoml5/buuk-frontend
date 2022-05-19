import { sendRecoveryEmailAPI } from "../services/Auth";
import { authFacebookAPI } from "../services/auth/auth-helpers";
import { useState } from "react";

export function useAuth() {
  const [state, setState] = useState({
    loading: false,
    error: false,
    message: "",
  });

  const authFacebook = async () => {
    try {
      const response = await authFacebookAPI();
      return response;
    } catch (error) {
      throw error;
    }
  };

  const sendRecoveryEmail = async (email) => {
    try {
      setState({ loading: true, error: false });
      const response = await sendRecoveryEmailAPI(email);
      if (!response.body) {
        setState({ loading: false, error: true, message: response });
        return;
      }
      setState({
        loading: false,
        error: false,
        message: "Verifica tu correo electronico",
      });
    } catch (error) {
      setState({
        loading: false,
        error: true,
        message: "Hubo un error, intentalo mas tarde",
      });
      throw error;
    }
  };

  return {
    authFacebook,
    sendRecoveryEmail,
    state,
  };
}
