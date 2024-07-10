import Axios from "../plugins/axios";
import { setLoginRequestFlag } from '../plugins/axios';

class AuthService {
    async login(payload) {
        try {
            setLoginRequestFlag(true); // Set the flag before making the request
          const data  = await Axios.post(`/admin/login`, payload);
          if (data?.access_token) {
            localStorage.setItem("token", data?.access_token);
            Axios.defaults.headers.common[
              "Authorization"
            ] = `Bearer ${data?.access_token}`;
          }
          setLoginRequestFlag(false); // Set the flag before making the request
        //   if (!data?.user?.login_id.startsWith("C")) {
        //     notifySuccess(data?.message ?? "Login successful");
        //   } else {
        //     notifyError(
        //       "You do not have access to this portal, kindly use the corporate portal"
        //     );
        //   }
          return data;
        } catch (error) {
            console.log(error)
            setLoginRequestFlag(false); // Set the flag before making the request
        //   notifyError(error?.response.data?.message?.message ?? "");
          return Promise.reject(error);
        }
      }
}
export const authService = new AuthService();
