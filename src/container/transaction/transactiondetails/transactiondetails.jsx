import { Fragment } from "react";
import { useParams } from "react-router-dom";
import { TransactionService } from "../../../services/transaction.service";
import Pageheader from "../../../components/common/pageheader/pageheader";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { Badge } from "../../../components/common/badge/badge";

const TransactionDetails = () => {
    const { id } = useParams();
    const { data, isLoading, error } = useQuery({
        queryKey: ["get-transactionid", id],
        queryFn: () => TransactionService.getTransaction(id),
        enabled: !!id,

        onError: (error) => {
            console.error("Error fetching data:", error.response.data);
        },
    });
    const formattedDate = data ? format(new Date(data.transaction_date), 'dd MMMM yyyy') : '';
    const formatCurrency = (value) => `₦${(value ?? 0).toLocaleString()}`;
    
    return (
        <Fragment>
            <Pageheader currentpage="transaction Details " activepage="Transactions" mainpage="Transaction Details" />
            <div className="grid grid-cols-12 gap-6">
                <div className="lg:col-span-6 col-span-12">
                    <div className="box custom-box ">
                        <div className="box-header !bg-gray-300 dark:!bg-gray-500">
                            <div className="box-title">
                                <h5 className="mb-0 font-semibold text-[1.375rem]">
                                    Transaction Information
                                </h5>
                            </div>
                        </div>
                        <div className="box-body !p-2 overflow-x-auto">
                                <div className=" grid grid-cols-12 ">
                                    <div className=" px-2 border-b py-3 col-span-6">
                                        <div>
                                            <h6 className=" gray-600  text-[12px]">Customers Name</h6>
                                            <p className="font-[500] text-[14px] pt-1">{data?.customer_name}</p>
                                        </div>
                                    </div>
                                    <div className=" px-2 border-b py-3 col-span-6 ">
                                        <div>
                                            <h6 className=" gray-600  text-[12px]">Service Type</h6>
                                            <p className="font-[500] text-[14px] pt-1">{data?.service_type}</p>
                                        </div>
                                    </div>
                                    <div className=" px-2 border-b py-3 col-span-6 ">
                                        <div>
                                            <h6 className=" gray-600  text-[12px]">Transaction Type</h6>
                                            <p className="font-[500] text-[14px] pt-1">{data?.transaction_type}</p>
                                        </div>
                                    </div>
                                    <div className=" px-2 border-b py-3 col-span-6 ">
                                        <div>
                                            <h6 className=" gray-600  text-[12px]">Amount</h6>
                                            <p className="font-[500] text-[14px] pt-1">{formatCurrency(data?.amount)}</p>
                                        </div>
                                    </div>
                                    <div className=" px-2 border-b py-3 col-span-6 ">
                                        <div>
                                            <h6 className=" gray-600  text-[12px]">Commission Earned</h6>
                                            <p className="font-[500] text-[14px] pt-1">{formatCurrency(data?.commission_earned)}</p>
                                        </div>
                                    </div>
                                    <div className=" px-2 border-b py-3 col-span-6 ">
                                        <div>
                                            <h6 className=" gray-600  text-[12px]">Phone Number</h6>
                                            <p className="font-[500] text-[14px] pt-1">{data?.mobile_number}</p>
                                        </div>
                                    </div>
                                    <div className=" px-2 border-b py-3 col-span-6 ">
                                        <div>
                                            <h6 className=" gray-600  text-[12px]">Transaction Id</h6>
                                            <p className="font-[500] text-[14px] pt-1">{data?.transactionID}</p>
                                        </div>
                                    </div>
                                    <div className=" px-2 border-b py-3 col-span-6 ">
                                        <div>
                                            <h6 className=" gray-600  text-[12px]">Transaction date</h6>
                                            <p className="font-[500] text-[14px] pt-1">{formattedDate}</p>
                                        </div>
                                    </div>
                                    <div className=" px-2 border-b py-3 col-span-6 ">
                                        <div>
                                            <h6 className=" gray-600  text-[12px]">Transaction Status</h6>
                                            <Badge status={data?.status}>
                                            {data?.status}
                                            </Badge>
                                        </div>
                                    </div>
                                    <div className=" px-2 border-b py-3 col-span-6 ">
                                        <div>
                                            <h6 className=" gray-600  text-[12px]">Agent Id</h6>
                                            <p className="font-[500] text-[14px] pt-1">{data?.agent_id}</p>
                                        </div>
                                    </div>
                                    
                                    
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default TransactionDetails;