import React, { Fragment, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import Pageheader from "../../../components/common/pageheader/pageheader";
import { useQuery } from "@tanstack/react-query";
import { format } from 'date-fns';
import { VerificationService } from "../../../services/verification.service";
import { Badge } from '../../../components/common/badge/badge';


const VerificationDetails = () => {
    const { id } = useParams();
    // const [verificationData, setVerificationData] = useState(null);

    const { data: verificationData, isLoading, error } = useQuery({
        queryKey: ["get-verification", id],
        queryFn: () => VerificationService.getOneVerification(id),
        onSuccess: () => {
            console.log("Data fetched successfully:", data); // Log the fetched data
            // setVerificationData(data);
        },
        onError: (error) => {
            console.error("Error fetching data:", error.response?.data || error.message); // Log the error
        }
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading data: {error.message}</div>;

    return (
        <Fragment>
            <Pageheader currentpage="Verification Details" activepage="Pages" mainpage="Verifications" />
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-12 col-span-12">
                    <div className="box custom-box">
                        {/* <div className="box-header">
                            <div className="box-title">
                                Verification Details
                            </div>
                        </div> */}
                        <div className="box-body !p-0">
                            {verificationData && (
                                <>
                                    <div className="p-4">
                                        <div className=' mb-10 flex justify-between'>
                                            <div className="flex items-center py-5 ">
                                                <div className="leading-none">
                                                    <span className="avatar avatar-lg p-1 bg-light avatar-rounded">
                                                        <img src={`data:image/jpeg;base64,${verificationData.photo}`}
                                                            alt=""
                                                            
                                                        />
                                                    </span>
                                                </div>

                                                <div className="ml-4">
                                                    <h2 className="text-xl font-semibold">{verificationData.firstname} {verificationData.lastname}</h2>
                                                    <p className="text-gray-500">{verificationData.title} - {verificationData.gender}</p>
                                                </div>
                                            </div>
                                            
                                        </div>

                                        <div className="grid grid-cols-12 gap-6">
                                            <div className="lg:col-span-6 col-span-12">
                                                <div className="box custom-box border">
                                                    <div className="box-header  !bg-gray-300 dark:!bg-gray-500">
                                                        <div className="box-title">
                                                            <h5 className="mb-0 font-semibold text-[1.375rem]">
                                                                Personal Information
                                                            </h5>
                                                        </div>
                                                    </div>
                                                    <div className="box-body !p-2 overflow-x-auto">
                                                        <div className=" grid grid-cols-12 ">
                                                            <div className='px-2 border-b py-3 col-span-12'>
                                                                {verificationData.camera_photo ? (
                                                                    <img
                                                                        src={`data:image/jpeg;base64,${verificationData.photo}`}
                                                                        alt="Camera"
                                                                        className="h-20 w-20 rounded-lg object-cover"
                                                                    />
                                                                ) : (
                                                                    <p>No photo available</p>
                                                                )}
                                                                <h6 className="gray-600 text-lg font-semibold">Photo</h6>

                                                            </div>
                                                            <div className=" px-2 border-b py-3 col-span-6">
                                                                <div>
                                                                    <h6 className=" gray-600  text-[12px]">Email</h6>
                                                                    <p className="font-[500] text-[14px] pt-1">{verificationData.email}</p>
                                                                </div>
                                                            </div>
                                                            <div className=" px-2 border-b py-3 col-span-6 ">
                                                                <div>
                                                                    <h6 className=" gray-600  text-[12px]">Phone</h6>
                                                                    <p className="font-[500] text-[14px] pt-1">{verificationData.phone_number}</p>
                                                                </div>
                                                            </div>
                                                            <div className=" px-2 border-b py-3 col-span-6 ">
                                                                <div>
                                                                    <h6 className=" gray-600  text-[12px]">Birthdate</h6>
                                                                    <p className="font-[500] text-[14px] pt-1">{verificationData.birthdate}</p>
                                                                </div>
                                                            </div>
                                                            <div className=" px-2 border-b py-3 col-span-6 ">
                                                                <div>
                                                                    <h6 className=" gray-600  text-[12px]">Nationality</h6>
                                                                    <p className="font-[500] text-[14px] pt-1">{verificationData.nationality}</p>
                                                                </div>
                                                            </div>
                                                            <div className=" px-2 border-b py-3 col-span-6 ">
                                                                <div>
                                                                    <h6 className=" gray-600  text-[12px]">Marital Status</h6>
                                                                    <p className="font-[500] text-[14px] pt-1">{verificationData.marital_status}</p>
                                                                </div>
                                                            </div>
                                                            <div className=" px-2 border-b py-3 col-span-6 ">
                                                                <div>
                                                                    <h6 className=" gray-600  text-[12px]">Address</h6>
                                                                    <p className="font-[500] text-[14px] pt-1">{verificationData.residential_address}</p>
                                                                </div>
                                                            </div>
                                                            <div className=" px-2 border-b py-3 col-span-6 ">
                                                                <div>
                                                                    <h6 className=" gray-600  text-[12px]">State of Origin</h6>
                                                                    <p className="font-[500] text-[14px] pt-1">{verificationData.state_of_origin}</p>
                                                                </div>
                                                            </div>
                                                            <div className=" px-2 border-b py-3 col-span-6 ">
                                                                <div>
                                                                    <h6 className=" gray-600  text-[12px]">State of Residence</h6>
                                                                    <p className="font-[500] text-[14px] pt-1">{verificationData.state_of_residence}</p>
                                                                </div>
                                                            </div>
                                                            <div className=" px-2 border-b py-3 col-span-6 ">
                                                                <div>
                                                                    <h6 className=" gray-600  text-[12px]">LGA of Origin</h6>
                                                                    <p className="font-[500] text-[14px] pt-1">{verificationData.lga_of_origin}</p>
                                                                    {/* <Badge status={verificationData.lga_of_origin}>
                                                                        {data?.status}
                                                                    </Badge> */}
                                                                </div>
                                                            </div>
                                                            <div className=" px-2 border-b py-3 col-span-6 ">
                                                                <div>
                                                                    <h6 className=" gray-600  text-[12px]">LGA of Residence</h6>
                                                                    <p className="font-[500] text-[14px] pt-1">{verificationData.lga_of_residence}</p>
                                                                </div>
                                                            </div>


                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="lg:col-span-6 col-span-12">
                                                <div className="box custom-box ">
                                                    <div className="box-header !bg-gray-300 dark:!bg-gray-500">
                                                        <div className="box-title">
                                                            <h5 className="mb-0 font-semibold text-[1.375rem]">
                                                                Verification Details
                                                            </h5>
                                                        </div>
                                                    </div>
                                                    <div className="box-body border  !p-2 overflow-x-auto">
                                                        <div className=" grid grid-cols-12 ">
                                                            <div className='px-2 border-b py-3 col-span-12'>
                                                                {verificationData.camera_photo ? (
                                                                    <img
                                                                        src={`data:image/jpeg;base64,${verificationData.camera_photo}`}
                                                                        alt="Camera"
                                                                        className="h-20 w-20 rounded-lg"
                                                                    />
                                                                ) : (
                                                                    <p>No photo available</p>
                                                                )}
                                                                <h6 className="gray-600 text-lg font-semibold">Camera Photo</h6>

                                                            </div>

                                                            <div className=" px-2 border-b py-3 col-span-6">
                                                                <div>
                                                                    <h6 className=" gray-600  text-[12px]">BVN</h6>
                                                                    <p className="font-[500] text-[14px] pt-1">{verificationData.bvn}</p>
                                                                </div>
                                                            </div>
                                                            <div className=" px-2 border-b py-3 col-span-6 ">
                                                                <div>
                                                                    <h6 className=" gray-600  text-[12px]">Verification Type</h6>
                                                                    <p className="font-[500] text-[14px] pt-1">{verificationData.verification_type}</p>
                                                                </div>
                                                            </div>
                                                            <div className=" px-2 border-b py-3 col-span-6 ">
                                                                <div>
                                                                    <h6 className=" gray-600  text-[12px]">Status</h6>
                                                                    <Badge status={verificationData.status}>
                                                                        {verificationData.status}
                                                                    </Badge>
                                                                </div>
                                                            </div>
                                                            <div className=" px-2 border-b py-3 col-span-6 ">
                                                                <div>
                                                                    <h6 className=" gray-600  text-[12px]">Status Status</h6>
                                                                    <Badge status={verificationData.status}>
                                                                        {verificationData.status}
                                                                    </Badge>
                                                                </div>
                                                            </div>
                                                            <div className=" px-2 border-b py-3 col-span-6 ">
                                                                <div>
                                                                    <h6 className=" gray-600  text-[12px]">Status State</h6>
                                                                    <Badge status={verificationData.status}>
                                                                        {verificationData.status}
                                                                    </Badge>
                                                                </div>
                                                            </div>
                                                            <div className=" px-2 border-b py-3 col-span-6 ">
                                                                <div>
                                                                    <h6 className=" gray-600  text-[12px]">Verification Date</h6>
                                                                    <p className="font-[500] text-[14px] pt-1"> {new Date(verificationData.registration_date).toLocaleDateString()}</p>
                                                                </div>
                                                            </div>
                                                            <div className=" px-2 border-b py-3 col-span-6 ">
                                                                <div>
                                                                    <h6 className=" gray-600  text-[12px]">Created At</h6>
                                                                    <p className="font-[500] text-[14px] pt-1">{format(new Date(verificationData.created_at), 'dd MMMM yyyy')}</p>
                                                                </div>
                                                            </div>
                                                            <div className=" px-2 border-b py-3 col-span-6 ">
                                                                <div>
                                                                    <h6 className=" gray-600  text-[12px]">Updated At</h6>
                                                                    <p className="font-[500] text-[14px] pt-1">{format(new Date(verificationData.updated_at), 'dd MMMM yyyy')}</p>
                                                                </div>
                                                            </div>
                                                            <div className=" px-2 border-b py-3 col-span-6 ">
                                                                <div>
                                                                    <h6 className=" gray-600  text-[12px]">Level of Account</h6>
                                                                    <p className="font-[500] text-[14px] pt-1">{verificationData.level_of_account}</p>
                                                                </div>
                                                            </div>
                                                            <div className=" px-2 border-b py-3 col-span-6 ">
                                                                <div>
                                                                    <h6 className=" gray-600  text-[12px]">Bank</h6>
                                                                    <p className="font-[500] text-[14px] pt-1">{verificationData.enrollment_bank} - {verificationData.enrollment_branch}</p>
                                                                </div>
                                                            </div>
                                                            <div className=" px-2 border-b py-3 col-span-6 ">
                                                                <div>
                                                                    <h6 className=" gray-600  text-[12px]">BVN Firstname Match</h6>
                                                                    <p className="font-[500] text-[14px] pt-1">{verificationData.bvn_check_firstname_match ? 'Yes' : 'No'}</p>

                                                                </div>
                                                            </div>
                                                            <div className=" px-2 border-b py-3 col-span-6 ">
                                                                <div>
                                                                    <h6 className=" gray-600  text-[12px]">BVN Lastname Match</h6>
                                                                    <p className="font-[500] text-[14px] pt-1">{verificationData.bvn_check_lastname_match ? 'Yes' : 'No'}</p>

                                                                </div>
                                                            </div>

                                                            <div className=" px-2 border-b py-3 col-span-6 ">
                                                                <div>
                                                                    <h6 className=" gray-600  text-[12px]">Watch Listed</h6>
                                                                    <p className="font-[500] text-[14px] pt-1">{verificationData.watch_listed ? 'Yes' : 'No'}</p>

                                                                </div>
                                                            </div>



                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                    <div></div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default VerificationDetails;
