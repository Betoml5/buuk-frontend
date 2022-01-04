import { authFacebookAPI } from "../services/auth/auth-helpers";

export function useAuth() {
  const authFacebook = async () => {
    try {
      const response = await authFacebookAPI();

      return response;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    authFacebook,
  };
}
