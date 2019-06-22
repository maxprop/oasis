import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
  {
    path: '',
    title: 'Agents and Offices',
    icon: 'mdi mdi-dots-horizontal',
    class: 'nav-small-cap',
    extralink: true,
    submenu: []
  },
  {
    path: '/account',
    title: 'Account',
    icon: 'icon-Security-Settings',
    class: '',
    extralink: false,
    submenu: [
    ]
  },
  {
    path: '/offices',
    title: 'Offices',
    icon: 'icon-Office',
    class: '',
    extralink: false,
    submenu: [
    ]
  },
  {
    path: '/agent',
    title: 'Agents',
    icon: 'icon-MaleFemale',
    class: '',
    extralink: false,
    submenu: [
    ]
  },
  {
    path: '/brokers',
    title: 'Brokers',
    icon: 'icon-Handshake',
    class: '',
    extralink: false,
    submenu: [
    ]
  },
  {
    path: '',
    title: 'Mandates',
    icon: 'mdi mdi-dots-horizontal',
    class: 'nav-small-cap',
    extralink: true,
    submenu: []
  },
  {
    path: '/mandates',
    title: 'My Mandates',
    icon: 'fab fa-wpforms',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '',
    title: 'Available Stock',
    icon: 'mdi mdi-dots-horizontal',
    class: 'nav-small-cap',
    extralink: true,
    submenu: []
  },
  {
    path: '/office-stock',
    title: 'Office Listings',
    icon: 'sl-icon-map',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/',
    title: 'Network Listings',
    icon: 'icon-Home-Window',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '',
    title: 'Contacts',
    icon: 'mdi mdi-dots-horizontal',
    class: 'nav-small-cap',
    extralink: true,
    submenu: []
  },
  {
    path: '/contacts',
    title: 'All Contacts',
    icon: 'icon-Address-Book',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/leads',
    title: 'Leads',
    icon: 'icon-Add-UserStar',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '',
    title: 'Ref',
    icon: 'mdi mdi-dots-horizontal',
    class: 'nav-small-cap',
    extralink: true,
    submenu: []
  },
  {
    path: '/starter',
    title: 'Starter Page',
    icon: 'icon-Files',
    class: '',
    extralink: false,
    submenu: []
  },

  {
    path: '',
    title: 'UI Elements',
    icon: 'icon-Paint-Brush',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '/component/accordion',
        title: 'Accordion',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/component/alert',
        title: 'Alert',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/component/carousel',
        title: 'Carousel',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/component/dropdown',
        title: 'Dropdown',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/component/modal',
        title: 'Modal',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/component/pagination',
        title: 'Pagination',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/component/poptool',
        title: 'Popover & Tooltip',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/component/progressbar',
        title: 'Progressbar',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/component/rating',
        title: 'Ratings',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/component/tabs',
        title: 'Tabs',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/component/timepicker',
        title: 'Timepicker',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/component/buttons',
        title: 'Button',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Menu Levels',
    icon: 'mdi mdi-notification-clear-all',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '',
        title: 'Second Level',
        icon: '',
        class: '',
        extralink: true,
        submenu: []
      },
      {
        path: '',
        title: 'Second Child',
        icon: '',
        class: 'has-arrow',
        extralink: false,
        submenu: [
          {
            path: '',
            title: 'Third 1.1',
            icon: '',
            class: '',
            extralink: false,
            submenu: []
          },
          {
            path: '',
            title: 'Third 1.2',
            icon: '',
            class: '',
            extralink: false,
            submenu: []
          }
        ]
      }
    ]
  }
];
