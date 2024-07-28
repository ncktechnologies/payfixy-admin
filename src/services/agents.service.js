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
    try{
        const response = await Axios.post(`/admin/toggle-agent-status`, payload);
        await Swal.fire({
            title: 'Success',
            text:  response.msg,
            icon: 'success',
            timer: 1000,
            showCloseButton: true,
            confirmButtonColor: '#A51D21',
            confirmButtonText: 'OK',
        })
        console.log(response.msg);
        return response;
    }catch (error){
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
}
export const AgentService = new Agents();
