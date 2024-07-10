import  {  Fragment, useRef, useState  } from 'react';
import { Link } from 'react-router-dom';
import Pageheader from '../../components/common/pageheader/pageheader';
import { AdminService } from '../../services/admin.service';
import { useQuery } from '@tanstack/react-query';
import Select from 'react-select';


const Admins = () => {
    const [manageAdminData, setmanageAdminData] = useState([]);
    const [selectedImage, setSelectedImage] = useState(); // Set the default image URL here
    const fileInputRef = useRef(null);
    const { data, isLoading, error } = useQuery({
        queryKey: ["get-admin"],
        queryFn: () => AdminService.getAllAdmins(),
        onSuccess: () => {
            setmanageAdminData(data);

        },
        onError: (error) => {
            console.error("Error fetching data:", error.response.data);
        }
    });
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading data : {error.response}</div>;
    const handleImageChange = (e) => {
        const selectedFile = e.target.files && e.target.files[0];
    
        if (selectedFile) {
          // You can handle the file here, for example, upload it to a server.
    
          // Read the selected image and set it in state
          const reader = new FileReader();
          reader.onload = (event) => {
            setSelectedImage(event.target?.result);
          };
          reader.readAsDataURL(selectedFile);
        }
      };
    
      const openFileInput = () => {
        if (fileInputRef.current) {
          fileInputRef.current.click();
        }
      };
      const handleDelete = (idToRemove) => {
        const updatedInvoiceData = manageAdminData.filter((item) => item.id !== idToRemove);
        setmanageAdminData(updatedInvoiceData);
    };

    return ( 
        <Fragment>
            <>
            <Pageheader currentpage="Admins" activepage="Pages" mainpage="Admins" />
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-12 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header justify-between">
                            <div className="box-title">
                                Admin <span className="badge bg-light text-defaulttextcolor rounded-full ms-1 text-[0.75rem] align-middle">{manageAdminData.length + 1}</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <Link to="#" className="hs-dropdown-toggle ti-btn ti-btn-primary-full !py-1 !px-2 !text-[0.75rem]" data-hs-overlay="#todo-compose">
                                    <i className="ri-add-line font-semibold align-middle"></i>Add Admin
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
                                            <th scope="col" className="text-start">Username</th>
                                            <th scope="col" className="text-start">Role</th>
                                            {/* <th scope="col" className="text-start">Status</th> */}
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
                                                    
                                                        <span className="block mb-1">{dats.username}</span>
                                                    </div>
                                                </td>
                                                
                                                <td>
                                                    <div className="flex items-center flex-wrap gap-1">
                                                        <span className={`badge `}>{dats.role}</span>
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
            <div className="hs-overlay hidden ti-offcanvas ti-offcanvas-right !max-w-[25rem] !border-0" tabIndex={-1} id="hs-overlay-contacts" aria-labelledby="offcanvasExample">
                <div className="ti-offcanvas-body !p-0">
                    <div className="sm:flex items-start p-6 border-b border-dashed border-defaultborder dark:border-defaultborder/10 main-profile-cover">
                        <div>
                            {/* <span className="avatar avatar-xxl avatar-rounded me-3 bg-light/10 p-2">
                                <img src={logo12} alt="" />
                            </span> */}
                        </div>
                        <div className="flex-fill main-profile-info w-full">
                            <div className="flex items-center justify-between">
                                <h6 className="font-semibold mb-1 text-white">Spruko Technologies</h6>
                                <button type="button" className="ti-btn flex-shrink-0 !p-0  transition-none text-white opacity-70 hover:opacity-100 hover:text-white focus:ring-0 focus:ring-offset-0 focus:ring-offset-transparent focus:outline-0 focus-visible:outline-0 !mb-0" data-hs-overlay="#hs-overlay-contacts">
                                    <span className="sr-only">Close modal</span>
                                    <i className="ri-close-line leading-none text-lg"></i>
                                </button>
                            </div>
                            <p className="mb-1 text-white opacity-70">Telecommunications</p>
                            <p className="text-[0.75rem] text-white mb-4 opacity-50">
                                <span className="me-3"><i className="ri-building-line me-1 align-middle"></i>Georgia</span>
                                <span><i className="ri-map-pin-line me-1 align-middle"></i>Washington D.C</span>
                            </p>
                            <div className="flex mb-0">
                                <div className="me-4">
                                    <p className="font-bold text-xl text-white text-shadow mb-0">113</p>
                                    <p className="mb-0 text-[0.6875rem] opacity-50 text-white">Deals</p>
                                </div>
                                <div className="me-4">
                                    <p className="font-bold text-xl text-white text-shadow mb-0">$12.2k</p>
                                    <p className="mb-0 text-[0.6875rem] opacity-50 text-white">Contributions</p>
                                </div>
                                <div className="me-4">
                                    <p className="font-bold text-xl text-white text-shadow mb-0">$10.67k</p>
                                    <p className="mb-0 text-[0.6875rem] opacity-50 text-white">Comitted</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 border-b border-dashed border-defaultborder dark:border-defaultborder/10">
                        <div className="mb-0">
                            <p className="text-[0.9375rem] mb-2 font-semibold">Professional Bio :</p>
                            <p className="text-[#8c9097] dark:text-white/50 op-8 mb-0">
                                <b className="text-default">Spruko</b> Technologies is a leading technology company specializing in innovative software solutions for businesses worldwide. With a strong focus on cutting-edge technologies and a team of skilled professionals.
                            </p>
                        </div>
                    </div>
                    <div className="p-6 border-b border-dashed border-defaultborder dark:border-defaultborder/10">
                        <p className="text-[.875rem] mb-2 me-4 font-semibold">Contact Information :</p>
                        <div className="">
                            <div className="flex items-center mb-2">
                                <div className="me-2">
                                    <span className="avatar avatar-sm avatar-rounded bg-light !text-[#8c9097] dark:text-white/50">
                                        <i className="ri-mail-line align-middle text-[.875rem]"></i>
                                    </span>
                                </div>
                                <div>
                                    sprukotechnologies2981@gmail.com
                                </div>
                            </div>
                            <div className="flex items-center mb-2">
                                <div className="me-2">
                                    <span className="avatar avatar-sm avatar-rounded bg-light !text-[#8c9097] dark:text-white/50">
                                        <i className="ri-phone-line align-middle text-[.875rem]"></i>
                                    </span>
                                </div>
                                <div>
                                    1678-28993-223
                                </div>
                            </div>
                            <div className="flex items-center mb-0">
                                <div className="me-2">
                                    <span className="avatar avatar-sm avatar-rounded bg-light !text-[#8c9097] dark:text-white/50">
                                        <i className="ri-map-pin-line align-middle text-[.875rem]"></i>
                                    </span>
                                </div>
                                <div>
                                    MIG-1-11, Monroe Street, Georgetown, Washington D.C, USA,20071
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 border-b border-dashed border-defaultborder dark:border-defaultborder/10 flex items-center">
                        <p className="text-[.875rem] mb-0 me-4 font-semibold">Social Networks :</p>
                        <div className="btn-list mb-0 gap-2 flex">
                            <button aria-label="button" type="button" className="ti-btn w-[1.75rem] h-[1.75rem] text-[0.8rem] py-[0.26rem] px-2 rounded-sm ti-btn-primary mb-0">
                                <i className="ri-facebook-line font-semibold"></i>
                            </button>
                            <button aria-label="button" type="button" className="ti-btn w-[1.75rem] h-[1.75rem] text-[0.8rem] py-[0.26rem] px-2 rounded-sm ti-btn-secondary mb-0">
                                <i className="ri-twitter-line font-semibold"></i>
                            </button>
                            <button aria-label="button" type="button" className="ti-btn w-[1.75rem] h-[1.75rem] text-[0.8rem] py-[0.26rem] px-2 rounded-sm ti-btn-warning mb-0">
                                <i className="ri-instagram-line font-semibold"></i>
                            </button>
                            <button aria-label="button" type="button" className="ti-btn w-[1.75rem] h-[1.75rem] text-[0.8rem] py-[0.26rem] px-2 rounded-sm ti-btn-success mb-0">
                                <i className="ri-github-line font-semibold"></i>
                            </button>
                            <button aria-label="button" type="button" className="ti-btn w-[1.75rem] h-[1.75rem] text-[0.8rem] py-[0.26rem] px-2 rounded-sm ti-btn-danger mb-0">
                                <i className="ri-youtube-line font-semibold"></i>
                            </button>
                        </div>
                    </div>
                    <div className="p-6 border-b border-dashed border-defaultborder dark:border-defaultborder/10 flex items-center gap-3">
                        <div className="text-[.875rem] font-semibold">Company Size:</div>
                        <div>
                            <span className="badge bg-primary/10 m-1">Corporate</span> - 1001+ Employees
                        </div>
                    </div>
                    <div className="p-4 flex items-center gap-3">
                        <div className="text-[.875rem] font-semibold">
                            Key Contact :
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="leading-none">
                                {/* <span className="avatar avatar-rounded avatar-sm">
                                    <img src={face2} alt="img" />
                                </span> */}
                            </div>
                            <div className="font-semibold">Lisa Convay</div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="todo-compose" className="hs-overlay hidden ti-modal">
                <div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out">
                    <div className="ti-modal-content">
                        <div className="ti-modal-header">
                            <h6 className="modal-title text-[1rem] font-semibold text-defaulttextcolor" id="mail-ComposeLabel">Add Admin</h6>
                            <button type="button" className="hs-dropdown-toggle !text-[1rem] !font-semibold !text-defaulttextcolor" data-hs-overlay="#todo-compose">
                                <span className="sr-only">Close</span>
                                <i className="ri-close-line"></i>
                            </button>
                        </div>
                        <div className="ti-modal-body px-4">
                            <div className="grid grid-cols-12 gap-4">
                                <div className="xl:col-span-12 col-span-12">
                                    <div className="mb-0 text-center">
                                        <span className="avatar avatar-xxl avatar-rounded">
                                            <img src={selectedImage || ''} alt="" id="profile-img" />
                                            <span className="badge rounded-pill bg-primary avatar-badge" onClick={openFileInput}>
                                                <input type="file" name="photo" className="absolute w-full h-full opacity-0"
                                                    id="profile-change" ref={fileInputRef}
                                                    onChange={handleImageChange}
                                                    style={{ display: 'none' }} />
                                                <i className="fe fe-camera text-[.625rem]"></i>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                                <div className="xl:col-span-6 col-span-12">
                                    <label htmlFor="company-name" className="form-label">Admin Name</label>
                                    <input type="text" className="form-control" id="company-name" placeholder="Contact Name" />
                                </div>
                                <div className="xl:col-span-6 col-span-12">
                                    <label htmlFor="company-lead-score" className="form-label">Phone No</label>
                                    <input type="number" className="form-control" id="company-lead-score" placeholder="Total Deals" />
                                </div>
                                <div className="xl:col-span-12 col-span-12">
                                    <label htmlFor="company-mail" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="company-mail" placeholder="Enter Email" />
                                </div>
                                <div className="xl:col-span-12 col-span-12">
                                    <label htmlFor="company-phone" className="form-label">Phone No</label>
                                    <input type="tel" className="form-control" id="company-phone" placeholder="Enter Phone Number" />
                                </div>
                                <div className="xl:col-span-12 col-span-12">
                                    <label htmlFor="key-contact" className="form-label">Address</label>
                                    <input type="text" className="form-control" id="key-contact" placeholder="Contact Name" />
                                </div>
                                {/* <div className="xl:col-span-12 col-span-12">
                                    <label className="form-label">Industry</label>
                                    <Select name="colors" options={Selectdata2} className="basic-multi-select"
                                        menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Selectdata2[0]]}
                                    />
                                </div>
                                <div className="xl:col-span-12 col-span-12">
                                    <label className="form-label">Company Size</label>
                                    <Select name="colors" options={Selectdata1} className="basic-multi-select"
                                        menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Selectdata1[0]]}
                                    />
                                </div> */}
                            </div>
                        </div>
                        <div className="ti-modal-footer">
                            <button type="button"
                                className="hs-dropdown-toggle ti-btn  ti-btn-light align-middle"
                                data-hs-overlay="#todo-compose">
                                Cancel
                            </button>
                            <button type="button" className="ti-btn bg-primary text-white !font-medium">Create Admin</button>
                        </div>
                    </div>
                </div>
            </div>
            
            </>
        </Fragment>
     );
}
 
export default Admins;