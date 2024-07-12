import { Fragment, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import Pageheader from '../../components/common/pageheader/pageheader';
import { AdminService } from '../../services/admin.service';
import { useMutation, useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import { Badge } from '../../components/common/badge/badge';
import { ToggleActive } from './toggleactive';

const Admins = () => {
  const [manageAdminData, setManageAdminData] = useState([]);
  const [adminDetails, setAdminDetails] = useState({
    username: "",
    password: "",
  });


  const { data, isLoading, error } = useQuery({
    queryKey: ["get-admin"],
    queryFn: () => AdminService.getAllAdmins(),
    onError: (error) => {
      console.error("Error fetching data:", error.response.data);
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (data) => await AdminService.createAdmin(data),
    onSuccess: () => {
        setActive((prevIsActive) => !prevIsActive);    
    },
    onError: (error) => {
      console.error("Error creating admin:", error);
    },
  });
  

  const create = useCallback((e) => {
    e.preventDefault();
    mutate(adminDetails);
  }, [adminDetails, mutate]);

  const changeHandler = useCallback((e) => {
    setAdminDetails({ ...adminDetails, [e.target.name]: e.target.value });
  }, [adminDetails]);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data: {error.response}</div>;
  const updateAdminStatus = (adminId, newStatus) => {
    setAdminList((prevList) =>
      prevList.map((admin) =>
        admin.id === adminId ? { ...admin, status: newStatus } : admin
      )
    );
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
                  Admin <span className="badge bg-light text-defaulttextcolor rounded-full ms-1 text-[0.75rem] align-middle">{manageAdminData.length}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <button onClick={toggleModal} className="hs-dropdown-toggle ti-btn ti-btn-primary-full !py-1 !px-2 !text-[0.75rem]" data-hs-overlay="#todo-compose">
                    <i className="ri-add-line font-semibold align-middle"></i>Add Admin
                  </button>
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
                        <th scope="col" className="text-start text-lg">Username</th>
                        <th scope="col" className="text-start text-lg">Role</th>
                        <th scope="col" className="text-start text-lg">Created At</th>
                        <th scope="col" className="text-start text-lg">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data?.map((dats) => (
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
                            <Badge status={dats.role}>
                              <div className="flex items-center flex-wrap gap-1">
                                <span className="">{dats.role}</span>
                              </div>
                            </Badge>
                          </td>
                          <td>{format(new Date(dats.created_at), 'dd MMMM yyyy')}</td>
                          <td>
                          <ToggleActive adminId={dats.id} isActive={dats.status} />
                            {/* <div className='space-x-2 rtl:space-x-reverse'>
                              <button onClick={() => activate()} type="button" className="ti-btn !py-1 !px-2 !text-[0.75rem] ti-btn-success-full btn-wave">
                              {isActive ? "Suspend" : "Activate"}
                              </button>
                            </div> */}
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
        <div id="todo-compose" className="hs-overlay hidden ti-modal">
          <div className="hs-overlay-open:mt-7 ti-modal-box !mt-32 ease-out">
            <div className="ti-modal-content">
              <div className="ti-modal-header">
                <h6 className="modal-title text-[1rem] font-semibold text-defaulttextcolor" id="mail-ComposeLabel">Add Admin</h6>
                <button  type="button" className="hs-dropdown-toggle !text-[1rem] !font-semibold !text-defaulttextcolor" data-hs-overlay="#todo-compose" >
                  <span className="sr-only">Close</span>
                  <i className="ri-close-line"></i>
                </button>
              </div>
              <div className="ti-modal-body px-4">
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-12">
                    <label htmlFor="company-name" className="form-label">Admin UserName</label>
                    <input type="text" className="form-control" id="username" name="username" placeholder="User Name" value={adminDetails.username} onChange={changeHandler} />
                  </div>
                  <div className="col-span-12">
                    <label htmlFor="company-lead-score" className="form-label">Password</label>
                    <input type="text" className="form-control" id="password" name="password" placeholder="Password" value={adminDetails.password} onChange={changeHandler} />
                  </div>
                </div>
              </div>
              <div className="ti-modal-footer">
                <button type="button"
                  className="hs-dropdown-toggle ti-btn ti-btn-light align-middle"
                  data-hs-overlay="#todo-compose">
                  Cancel
                </button>
                {!isPending &&
                <button  onClick={create} type="button" className="ti-btn bg-primary text-white !font-medium">Create Admin</button>
                }
                {isPending &&
                <button disabled type="button" className="ti-btn bg-secondary text-white !font-medium">Create Admin</button>
                }
                </div>
            </div>
          </div>
        </div>
      </>
    </Fragment>
  );
}

export default Admins;
