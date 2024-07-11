import React, { Fragment, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Pageheader from '../../components/common/pageheader/pageheader';
import { useQuery } from "@tanstack/react-query";
import { AgentService } from "../../services/agents.service";





const Agents = () => {
    
    const [AgentsData, setAgentsData] = useState([]);

    const { data, isLoading, error } = useQuery({
        queryKey: ["get-agents"],
        queryFn: () => AgentService.getAllAgents(),
        onSuccess: () => {
            setAgentsData(data);
        },
        onError: (error) => {
            console.error("Error fetching data:", error.response.data);
        }
    });
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading data : {error.response}</div>;

    const handleDelete = (idToRemove) => {
        const updatedInvoiceData = AgentsData.filter((item) => item.id !== idToRemove);
        setAgentsData(updatedInvoiceData);
    };
    
    return (
        <Fragment>
            <Pageheader currentpage="Agents" activepage="Pages" mainpage="Agents" />
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-12 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header justify-between">
                            <div className="box-title">
                                Agents <span className="badge bg-light text-defaulttextcolor rounded-full ms-1 text-[0.75rem] align-middle">{AgentsData.length + 1}</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <Link to="#" className="hs-dropdown-toggle ti-btn ti-btn-primary-full !py-1 !px-2 !text-[0.75rem]" data-hs-overlay="#todo-compose">
                                    <i className="ri-add-line font-semibold align-middle"></i>Add Agents
                                </Link>
                                <button type="button" className="ti-btn ti-btn-success !py-1 !px-2 !text-[0.75rem] btn-wave">Export As CSV</button>
                                <div className="hs-dropdown ti-dropdown">
                                    <Link to="#" className="ti-btn ti-btn-light !py-1 !px-2 !text-[0.75rem] btn-wave" aria-expanded="false">
                                        Sort By<i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
                                    </Link>
                                    <ul className="hs-dropdown-menu ti-dropdown-menu hidden" role="menu">
                                        <li><Link className="ti-dropdown-item" to="#">Newest</Link></li>
                                        <li><Link className="ti-dropdown-item" to="#">Date Added</Link></li>
                                        <li><Link className="ti-dropdown-item" to="#">A - Z</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="box-body !p-0">
                            <div className="table-responsive">
                                <table className="table whitespace-nowrap min-w-full">
                                    <thead>
                                        <tr>
                                            <th scope="col">
                                                <input className="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." />
                                            </th>
                                            <th scope="col" className="text-start">Agent Name</th>
                                            <th scope="col" className="text-start">Email</th>
                                            <th scope="col" className="text-start">Phone</th>
                                            <th scope="col" className="text-start">Status</th>
                                            {/* <th scope="col" className="text-start">Verification</th> */}
                                            <th scope="col" className="text-start">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((dats) => (

                                            <tr className="border border-defaultborder crm-contact" key={dats.id}>
                                                <td>
                                                    <input className="form-check-input" type="checkbox" id="checkboxNoLabel1" value="" aria-label="..." />
                                                </td>

                                                <td>
                                                    <div className='flex items-center gap-x-2'>
                                                    <div className="leading-none">
                                                        <span className="avatar avatar-sm p-1 bg-light avatar-rounded">
                                                            <img src={dats.profile_photo} alt="" />
                                                        </span>
                                                    </div>
                                                        <span className="block mb-1">{dats.firstname}</span>
                                                        <span className="block mb-1">{dats.lastname}</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className='flex gap-x-2'>
                                                        <span className="block mb-1"><i className="ri-mail-line me-2 align-middle text-[.875rem] text-[#8c9097] dark:text-white/50 inline-flex"></i>{dats.email}</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        <span className="block"><i className="ri-phone-line me-2 align-middle text-[.875rem] text-[#8c9097] dark:text-white/50 inline-flex"></i>{dats.phone_number}</span>
                                                    </div>
                                                </td>
                                                
                                                <td>
                                                    <div className="flex items-center flex-wrap gap-1">
                                                        <span className={`badge `}>{dats.status}</span>
                                                    </div>
                                                </td>

                                                {/* <td>
                                                    {idx.score}
                                                </td> */}
                                                <td>
                                                    <div className='space-x-2 rtl:space-x-reverse'>
                                                        <button aria-label="button" type="button" className="ti-btn ti-btn-sm ti-btn-warning" data-hs-overlay="#hs-overlay-contacts"><i className="ri-eye-line"></i></button>
                                                        <button aria-label="button" type="button" className="ti-btn ti-btn-sm ti-btn-info"><i className="ri-pencil-line"></i></button>
                                                        <button aria-label="button" type="button" className="ti-btn ti-btn-sm ti-btn-danger contact-delete" onClick={() => handleDelete(idx.id)}><i className="ri-delete-bin-line"></i></button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="box-footer !border-t-0">
                            <div className="flex items-center">
                                <div>
                                    Showing 10 Entries <i className="bi bi-arrow-right ms-2 font-semibold"></i>
                                </div>
                                <div className="ms-auto">
                                    <nav aria-label="Page navigation" className="pagination-style-4">
                                        <ul className="ti-pagination mb-0">
                                            <li className="page-item disabled">
                                                <Link className="page-link" to="#">
                                                    Prev
                                                </Link>
                                            </li>
                                            <li className="page-item "><Link className="page-link active" to="#">1</Link></li>
                                            <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                            <li className="page-item">
                                                <Link className="page-link text-primary" to="#">
                                                    next
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            
        </Fragment>
    );
}

export default Agents;

