import Axios from "../plugins/axios";
class Transaction {
    async getAllTransactions() {
        try {
          const response = await Axios.get(`/admin/transactions`);
          // console.log(response)
          return response;
        } catch (error) {
          throw new Error(error);
        }
    }
    async getAllCommissions() {
        try {
          const response = await Axios.get(`/admin/commissions`);
          // console.log(response)
          return response;
        } catch (error) {
          throw new Error(error);
        }
    }
    async getAllPayments() {
        try {
          const response = await Axios.get(`/admin/payments`);
          // console.log(response)
          return response;
        } catch (error) {
          throw new Error(error);
        }
    }
    
}
export const TransactionService = new Transaction();
