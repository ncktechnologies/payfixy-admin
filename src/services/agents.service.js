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
