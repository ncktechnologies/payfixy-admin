import Axios from "../plugins/axios";
class Admin {
    async getAllAdmins() {
        try {
          const response = await Axios.get(`/admin/all`);
          // console.log(response)
          return response;
        } catch (error) {
          throw new Error(error);
        }
    }
    
}
export const AdminService = new Admin();
