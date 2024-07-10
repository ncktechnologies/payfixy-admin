import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Pageheader from "../../components/common/pageheader/pageheader";
import { useQuery } from '@tanstack/react-query';
import { AgentService } from '../../services/agents.service';

const SupportTickets = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ["get-agents"],
        queryFn: () => AgentService.getAllSupportTickets(),
        onSuccess: () => {
            console.log(data);
        },
        onError: (error) => {
            console.error("Error fetching data:", error.response.data);
        }
    });
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading data : {error.response}</div>;

    return (
        <>
            <Fragment>
                <Pageheader currentpage="Support Tickets" activepage="Pages" mainpage="Support Ticket" />
                <div className="container">
                    <div className="max-w-6xl mx-auto ">
                        <div className="grid grid-cols-12 sm:gap-x-6 gap-y-4 ">
                            {data.map((idx) => (

                                <div className="xxl:col-span-4 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12" key={idx.id}>
                                    <div className="box">
                                        <div className="box-header">
                                            <div className="flex align-center w-full">
                                                <div className="my-auto">
                                                    <div className="text-[.9375rem] font-semibold">{idx.full_name}</div>
                                                    <p className="mb-0 text-[#8c9097] dark:text-white/50 text-[.6875rem]">{idx.phone}</p>
                                                </div>
                                                <div className="hs-dropdown ti-dropdown ms-auto my-auto">
                                                    <Link aria-label="anchor" to="#" className="ti-btn ti-btn-icon ti-btn-sm ti-btn-light !mb-0">
                                                        <i className="fe fe-more-vertical"></i>
                                                    </Link>
                                                    <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                                        <li><Link className="ti-dropdown-item" to="#">Week</Link></li>
                                                        <li><Link className="ti-dropdown-item" to="#">Month</Link></li>
                                                        <li><Link className="ti-dropdown-item" to="#">Year</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="box-body">
                                            {idx.message}
                                        </div>
                                    
                                        <div className="box-footer">
                                            <div className="flex justify-between">
                                                <div className="font-semibold text-[.875rem]">28,Nov 2022</div>
                                                <div className="font-semibold text-success ">Assistant Professor</div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            ))}
                        </div>
                        <nav aria-label="Page navigation">
                            <ul className="ti-pagination  mb-4 justify-end">
                                <li className="page-item disabled"><Link className="page-link px-3 py-[0.375rem]" to="#">Previous</Link></li>
                                <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" to="#">1</Link></li>
                                <li className="page-item"><Link className="page-link active px-3 py-[0.375rem]" to="#">2</Link></li>
                                <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" to="#">3</Link></li>
                                <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" to="#">Next</Link></li>
                            </ul>
                        </nav>
                    </div>

                </div>
            </Fragment>
        </>
    );
}

export default SupportTickets;