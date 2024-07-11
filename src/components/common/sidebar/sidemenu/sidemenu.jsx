

export const MENUITEMS = [
  
      {
        icon: (<i className="side-menu__icon bx bx-home"></i>),
        type: 'link',
        Name: '',
        active: false,
        selected: false,
         dirchange: false,
        title: 'Dashboards',
        badge: '',
        badgetxt: '',
        class: 'badge !bg-warning/10 !text-warning !py-[0.25rem] !px-[0.45rem] !text-[0.75em] ms-2',

         path: `${import.meta.env.BASE_URL}dashboards`,
        
      },
      
      {
        
        title: "Admins",
        path: `${import.meta.env.BASE_URL}admins`,
        icon: (<i className="ti ti-users side-menu__icon"></i>),
        type: "link",
        selected: false, 
        dirchange: false,
        active: false,
        
      },
      {
        
        title: "Agents",
        path: `${import.meta.env.BASE_URL}agents`,
        icon: (<i className="ti ti-users side-menu__icon"></i>),
        type: "link",
        selected: false, 
        dirchange: false,
        active: false,
      },
      {
        
        title: "Transaction",
        path: `${import.meta.env.BASE_URL}transaction`,
        icon: (<i className="ti ti-wallet side-menu__icon"></i>),
        type: "link",
        selected: false, 
        dirchange: false,
        active: false,
       
      },
      {
        
        title: "Commissions",
        path: `${import.meta.env.BASE_URL}commissions`,
        icon: (<i className="ti ti-briefcase side-menu__icon"></i>),
        type: "link",
        selected: false, 
        dirchange: false,
        active: false,
      },
      {
        
        title: "SupportTickets",
        path: `${import.meta.env.BASE_URL}support-tickets`,
        icon: (<i className="bx bx-grid-alt side-menu__icon"></i>),
        type: "link",
        selected: false, 
        dirchange: false,
        active: false,
      },
      {
        
        title: "Payments",
        path: `${import.meta.env.BASE_URL}payments`,
        icon: (<i className="ti ti-wallet side-menu__icon"></i>),
        type: "link",
        selected: false, 
        dirchange: false,
        active: false,
      },

  
 
];
