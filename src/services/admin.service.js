import Axios from "../plugins/axios";
import Swal from 'sweetalert2';

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
    async createAdmin(payload) {
        try {
            const response = await Axios.post(`/admin/create`, payload);
            // console.log(response)
            await Swal.fire({
                title: 'Success',
                text: response?.data || 'Admin created successfully',
                icon: 'success',
                timer: 1000,
                showCloseButton: true,
                confirmButtonColor: '#A51D21',
                confirmButtonText: 'OK',
            })
            return response;
        } catch (error) {
            let errorMessage = 'An unexpected error occurred. Please try again later.';
        
        if (error.response) {
            if (error.response.data && error.response.data.message) {
                errorMessage = error.response.data.message;
            } else {
                errorMessage = `Server Error: ${error.response.status}`;
            }
        } else if (error.request) {
            errorMessage = 'Network error: Please check your internet connection.';
        }
            await Swal.fire({
                title: 'Error',
                text: errorMessage,
                icon: 'error',
                showCloseButton: true,
                confirmButtonColor: '#A51D21',
                confirmButtonText: 'OK',
            })
            throw new Error(error);
        }
    }

    async suspendAdminToggle(adminId, isActive) {
        const payload = { admin_id: adminId };
        try{
            const response = await Axios.put(`/admin/suspend`, payload);
            await Swal.fire({
                title: 'Success',
                text:  response.msg,
                icon: 'success',
                timer: 1000,
                showCloseButton: true,
                confirmButtonColor: '#A51D21',
                confirmButtonText: 'OK',
            })
            return response;
        }catch (error){
            throw new Error(error);
        }
    }
}
export const AdminService = new Admin();
