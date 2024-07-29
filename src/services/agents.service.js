import Swal from "sweetalert2";
import Axios from "../plugins/axios";
class Agents {
  async getAllAgents() {
    try {
      const response = await Axios.get(`/admin/agents`);
      // console.log(response)
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }
  async getOneAgent(agentId) {
    try {
      const response = await Axios.get(`/admin/agents/${agentId}`);
      // console.log(response)
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }
  async suspendAgentToggle(agentId, isActive) {
    const payload = { agent_id: agentId };
    try {
      const response = await Axios.post(`/admin/toggle-agent-status`, payload);
      await Swal.fire({
        title: 'Success',
        text: response.msg,
        icon: 'success',
        timer: 1000,
        showCloseButton: true,
        confirmButtonColor: '#A51D21',
        confirmButtonText: 'OK',
      })
      console.log(response.msg);
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }
  async getAllSupportTickets() {
    try {
      const response = await Axios.get(`/admin/support-tickets`);
      // console.log(response)
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }
  async verifyAgent(payload) {
    try {
      const response = await Axios.post(`/admin/verify-agent`, payload);
      // console.log(response)
      await Swal.fire({
        title: 'Success',
        text: response?.data || 'Agent Verified successfully',
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
}
export const AgentService = new Agents();
