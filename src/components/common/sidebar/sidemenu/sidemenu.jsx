

export const MENUITEMS = [
  {
    menutitle: 'MAIN',
  },
      {
        icon: (<i className="side-menu__icon bx bx-home"></i>),
        type: 'sub',
        Name: '',
        active: false,
        selected: false,
         dirchange: false,
        title: 'Dashboards',
        badge: '',
        badgetxt: '',
        class: 'badge !bg-warning/10 !text-warning !py-[0.25rem] !px-[0.45rem] !text-[0.75em] ms-2',
        children: [
          { path: `${import.meta.env.BASE_URL}dashboards/crm`, type: 'link', active: false, selected: false, dirchange: false, title: 'CRM' },
        ]
      },
      {
        
        title: "Transaction",
        path: `${import.meta.env.BASE_URL}transaction`,
        icon: (<i className="bx bx-store-alt side-menu__icon"></i>),
        type: "link",
        selected: false, 
        dirchange: false,
        active: false,
       
      },
      {
        
        title: "Admins",
        path: `${import.meta.env.BASE_URL}admins`,
        icon: (<i className="bx bx-store-alt side-menu__icon"></i>),
        type: "link",
        selected: false, 
        dirchange: false,
        active: false,
        
      },
      {
        
        title: "Agents",
        path: `${import.meta.env.BASE_URL}agents`,
        icon: (<i className="bx bx-store-alt side-menu__icon"></i>),
        type: "link",
        selected: false, 
        dirchange: false,
        active: false,
      },
      {
        
        title: "Commissions",
        path: `${import.meta.env.BASE_URL}commissions`,
        icon: (<i className="bx bx-grid-alt side-menu__icon"></i>),
        type: "link",
        selected: false, 
        dirchange: false,
        active: false,
      },

  
 
];
