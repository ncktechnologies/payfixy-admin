import { Fragment, useState } from 'react';
import Pageheader from '../../components/common/pageheader/pageheader';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import { useQuery } from "@tanstack/react-query";
import { TransactionService } from '../../services/transaction.service';




const Commission = () => {
    const [manageInvoiceData, setManageInvoiceData] = useState([]);
    const handleDelete = (idToRemove) => {
        const updatedInvoiceData = manageInvoiceData.filter((item) => item.id !== idToRemove);
        setManageInvoiceData(updatedInvoiceData);
    };
    const { data, isLoading, error } = useQuery({
        queryKey: ["get-commission"],
        queryFn: () => TransactionService.getAllCommissions(),
        onSuccess: () => {
            setManageInvoiceData(data);
        },
        onError: (error) => {
            console.error("Error fetching data:", error.response.data);
        }
    });
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading data : {error.response}</div>;

    return (
        <Fragment>
            <Pageheader currentpage="Commission" activepage="Pages" mainpage="Commission" />
            <div className="grid grid-cols-12 gap-6">
                <div className=" col-span-12">
                    <div className="box custom-box">
                        <div className="box-header justify-between">
                            <div className="box-title">
                                Commissions
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <div>
                                    <input className="form-control form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example" />
                                </div>
                                
                                
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="table-responsive">
                                <table className="table whitespace-nowrap table-bordered min-w-full">
                                    <thead>
                                        <tr>
                                            <th scope="col"></th>
                                            <th scope="col" className="text-start">Service Type</th>
                                            <th scope="col" className="text-start">Transaction Type</th>
                                            <th scope="col" className="text-start">Customer</th>
                                            <th scope="col" className="text-start">Date</th>
                                            <th scope="col" className="text-start">Amount</th>
                                            <th scope="col" className="text-start">Commission</th>
                                            <th scope="col" className="text-start">Status</th>
                                            <th scope="col" className="text-start">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((idx) => (
                                            <tr className="border border-defaultborder transaction" key={idx.id}>
                                                <td>
                                                   
                                                </td>
                                                <td>
                                                    <div className="flex items-center gap-2">

                                                        <div className="font-semibold">{idx.service_type}</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span>{idx.transaction_type}</span>
                                                </td>
                                                <td>
                                                    <span className={`text-${idx.color1}`}>{idx.customer_name}</span>
                                                </td>
                                                <td>
                                                    <span>
                                                        {new Date(
                                                            idx.transaction_date
                                                        ).toDateString()}
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className={`text-${idx.color1}`}>₦{idx.amount}</span>
                                                </td>
                                                
                                                <td>
                                                    <span>₦{idx.commission_earned}</span>
                                                </td>
                                                <td>
                                                    <span className={`badge bg-${idx.color2}/10 text-${idx.color2}`}>{idx.status}</span>
                                                </td>
                                                <td>
                                                    <div className='space-x-2 rtl:space-x-reverse'>
                                                        <div className="hs-tooltip ti-main-tooltip">
                                                            <button type="button" className="hs-tooltip-toggle ti-btn ti-btn-primary ti-btn-sm">
                                                                <span><i className="ri-download-2-line"></i></span>
                                                                <span
                                                                    className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                                    role="tooltip">
                                                                    Download
                                                                </span>
                                                            </button>
                                                        </div>
                                                        <div className="hs-tooltip ti-main-tooltip">
                                                            <button type="button" className="hs-tooltip-toggle ti-btn ti-btn-danger ms-1 ti-btn-sm transaction-delete-btn" onClick={() => handleDelete(idx.id)}>
                                                                <span><i className="ri-delete-bin-5-line"></i></span>
                                                                <span
                                                                    className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                                    role="tooltip">
                                                                    Delete
                                                                </span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="box-footer">
                            <nav aria-label="Page navigation">
                                <ul className="ti-pagination sm:ltr:float-right sm:rtl:float-left justify-center mb-4">
                                    <li className="page-item disabled"><Link className="page-link px-3 py-[0.375rem]" to="#">Previous</Link></li>
                                    <li className="page-item"><Link className="page-link px-3 py-[0.375rem] active" to="#">1</Link></li>
                                    <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" to="#">2</Link></li>
                                    <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" to="#">3</Link></li>
                                    <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" to="#">Next</Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                
            </div>
        </Fragment>
    );
}

export default Commission;
