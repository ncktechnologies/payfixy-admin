import { Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import Pageheader from "../../../components/common/pageheader/pageheader";
import { useQuery } from "@tanstack/react-query";
import { ToggleActive } from "../toggleactive";
import { AgentService } from "../../../services/agents.service";
import { format } from 'date-fns';



const AgentDetails = () => {
    const { id } = useParams();
    const { data, isLoading, error } = useQuery({
        queryKey: ["get-agentid", id],
        queryFn: () => AgentService.getOneAgent(id),
        enabled: !!id,

        onError: (error) => {
            console.error("Error fetching data:", error.response.data);
        },
    });
    const formattedDob = data ? format(new Date(data.dob), 'dd MMMM yyyy') : '';
    console.log(data)
    return (
        <Fragment>
            <Pageheader currentpage="Agent Details " activepage="Agent" mainpage="Agent Details" />
            <div className="sm:ml-10">
                <div className="flex justify-between mb-5">
                    <div className="flex gap-3 items-center">
                        <span className="avatar avatar-xxl !rounded-full">
                            <img src={data?.profile_photo} className="!rounded-full img-fluid" alt="" />
                        </span>
                        <div>
                        <h4 className="font-bold mb-0 sm:flex items-center"><Link to="#"> {data?.lastname} <i className="bi bi-check-circle-fill text-success text-[1rem]" title="Verified candidate"></i></Link></h4>
                            <span className="font-bold"><i className="bi bi-email me-2"></i>{data?.email}</span>
                        </div>

                    </div>
                    <div className="btn-list flex sm:justify-end ">
                    <div className="sm:flex gap-3 btn-list">
                        <p className="font-bold pt-1 text-lg">Suspend Agent</p>
                        <ToggleActive agentId={id} />
                    </div>
                </div>

                </div>
                

                <div className="grid grid-cols-12 gap-6">
                    <div className="lg:col-span-6 col-span-12">
                        <div className="box custom-box ">
                            <div className="box-header !bg-gray-300 dark:!bg-gray-500">
                                <div className="box-title">
                                    <h5 className="mb-0 font-semibold text-[1.375rem]">
                                        Agent Profile Information
                                    </h5>
                                </div>
                            </div>
                            <div className="box-body !p-2 overflow-x-auto">
                                <table className="table table-borderless min-w-full">
                                    <tbody>
                                        <tr>
                                            <td className="">
                                                <span className="font-semibold"> Name</span>
                                            </td>
                                            <td>:{data?.lastname}</td>
                                        </tr>
                                        <tr>
                                            <td className="">
                                                <span className="font-semibold">Email</span>
                                            </td>
                                            <td>: {data?.email}</td>
                                        </tr>
                                        <tr>
                                            <td className="">
                                                <span className="font-semibold">D.O.B</span>
                                            </td>
                                            <td>: {formattedDob}</td>
                                        </tr>

                                        <tr>
                                            <td className="">
                                                <span className="font-semibold">Age</span>
                                            </td>
                                            <td>: 35</td>
                                        </tr>
                                        <tr>
                                            <td className="">
                                                <span className="font-semibold">Mobile </span>
                                            </td>
                                            <td>: {data?.phone_number}</td>
                                        </tr>
                                        <tr>
                                            <td className="">
                                                <span className="font-semibold">BVN </span>
                                            </td>
                                            <td>: {data?.bvn}</td>
                                        </tr>
                                        <tr>
                                            <td className="">
                                                <span className="font-semibold">Pin</span>
                                            </td>
                                            <td>: {data?.pin}</td>
                                        </tr>

                                        <tr>
                                            <td className="">
                                                <span className="font-semibold">Address </span>
                                            </td>
                                            <td> {data?.home_address}</td>
                                        </tr>
                                        <tr>
                                            <td className="">
                                                <span className="font-semibold">Latitude  </span>
                                            </td>
                                            <td>: {data?.latitude}</td>
                                        </tr>
                                        <tr>
                                            <td className="">
                                                <span className="font-semibold">Longitude </span>
                                            </td>
                                            <td>: {data?.longitude}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </Fragment>
    );
}

export default AgentDetails;