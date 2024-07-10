// import { useQuery } from "@tanstack/react-query";
// import { AgentService } from "../../services/agents.service";

// export const useAgents = () => {
//   const { data, isLoading } = useQuery({
//     queryKey: ["get-agents"],
//     queryFn: () => AgentService.getAllAgents(),
//   });
//   return { data, isLoading };
// };

export const Companydata= [
    { id: '1', name: 'Lisa Convay', time: '24, Jul 2023 - 4:45PM', score: '258', mail: 'sprukotechnologies2981@gmail.com', cell: '1678-28993-223', badge: 'Corporate', text1: 'Spruko Technologies', text2: 'Information Technology', color: 'primary/10', class: 'primary' },
    { id: '2',  name: 'Jacob Smith', time: '15, Jul 2023 - 11:45AM', score: '335', mail: 'jspiceinfotech289@gmail.com', cell: ' 8122-2342-4453', badge: 'Small Business', text1: 'Spice Infotech', text2: 'Telecommunications', color: 'danger/10', class: 'danger' },
    { id: '3',  name: 'Jake Sully', time: '10, Aug 2023 - 3:25PM', score: '685', mail: 'logitecheco789@gmail.com', cell: ' 1902-2001-3023', badge: 'Micro Business', text1: 'Logitech ecostics', text2: 'Logistics', color: 'success/10', class: 'success' },
    { id: '4', name: 'Kiara Advain', time: '18, Aug 2023 - 10:10AM', score: '425', mail: 'initechinfo290@gmail.com', cell: ' 1603-2032-1123', badge: 'Startup', text1: 'Initech Info', text2: 'Information Technology', color: 'light', class: 'default' },
    { id: '5', name: 'Brenda Simpson', time: '19, Jul 2023 - 12:41PM', score: '516', mail: 'massivedynamic1993@gmail.com', cell: '1129-2302-1092', badge: 'Large Enterprise', text1: 'Massive Dynamic', text2: 'Professional Services', color: 'pink/10', class: 'pink' },
    { id: '6', name: 'Json Taylor', time: '14, Aug 2023 - 5:18PM', score: '127', mail: 'globexcorp345@gmail.com', cell: ' 9923-2344-2003', badge: 'Small Business', text1: 'Globex Corporation', text2: 'Education', color: 'danger/10', class: 'danger' },
    { id: '7',  name: 'Dwayne Jhonson', time: '12, Jun 2023 - 11:38AM', score: '368', mail: 'acmecorporation78@gmail.com', cell: '7891-2093-1994', badge: 'Corporate', text1: 'Acme Corporation', text2: 'Telecommunications', color: 'primary/10', class: 'primary' },
    { id: '8', name: 'Emiley Jackson', time: '19, May 2023 - 1:57PM', score: '563', mail: 'soylentcorp678@gmail.com', cell: '	1899-2993-1923', badge: 'Medium Size', text1: 'Soylent Corp', text2: 'Manufacturing', color: 'warning/10', class: 'warning' },
    { id: '9',  name: 'Jessica Morris', time: '28, Jul 2023 - 9:31AM', score: '185', mail: 'umbrellacorp289@gmail.com', cell: ' 1768-2332-4934', badge: 'Micro Business', text1: 'Umbrella Corporation', text2: 'Healthcare', color: 'success/10', class: 'success' },
    { id: '10', name: 'Michael Jeremy', time: '28, Jul 2023 - 9:31AM', score: '240', mail: 'hoolitech186@gmail.com', cell: '4788-7822-4786', badge: 'Startup', text1: 'Hooli Technologies', text2: 'Information Technology',color: 'light', class: 'default' }
];
export const Selectdata1 = [
    { value: 'Company Size', label: 'Company Size' },
    { value: 'Corporate', label: 'Corporate' },
    { value: 'Small Business', label: 'Small Business' },
    { value: 'Micro Business', label: 'Micro Business' },
    { value: 'Startup', label: 'Startup' },
    { value: 'Large Enterprise', label: 'Large Enterprise' },
    { value: 'Medium Size', label: 'Medium Size' },
];
export const Selectdata2 = [
    { value: 'Select Industry', label: 'Select Industry' },
    { value: 'Information Technology', label: 'Information Technology' },
    { value: 'Telecommunications', label: 'Telecommunications' },
    { value: 'Logistics', label: 'Logistics' },
    { value: 'Professional Services', label: 'Professional Services' },
    { value: 'Education', label: 'Education' },
    { value: 'Manufacturing', label: 'Manufacturing' },
    { value: 'Healthcare', label: 'Healthcare' }
];
