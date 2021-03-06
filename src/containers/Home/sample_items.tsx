import { v4 as uuid } from 'uuid';
import { MenuItem } from '../../components/Menu';
import {
  CloudUpload,
  Share,
  Search,
  Bookmarks,
  Cloud,
  Home,
  Heart,
  Document,
  Download,
  List,
  Text,
  Time,
  Expand,
} from '../../assets/icons/essentials';

export const menuItems: MenuItem[] = [
  {
    id: uuid(),
    name: 'Upload file',
    icon: <CloudUpload />,
  },
  {
    id: uuid(),
    name: 'Share with others',
    icon: <Share />,
  },
  // {
  //   id: uuid(),
  //   name: 'Magnify',
  //   icon: <Magnifier />,
  //   onClick: () => console.log('magnify'),
  // },
  {
    id: uuid(),
    name: 'Bookmark this page',
    icon: <Bookmarks />,
  },
  {
    id: uuid(),
    name: 'Cloud',
    icon: <Cloud />,
    disabled: true,
    onClick: () => console.log('cloud'),
  },
  // {
  //   id: uuid(),
  //   name: 'Back to home',
  //   icon: <Home />,
  // },
  {
    id: uuid(),
    name: 'Sort by',
    isSubMenu: true,
    icon: <List />,
    items: [
      {
        id: uuid(),
        name: 'File name',
        icon: <Text />,
      },
      {
        id: uuid(),
        name: 'Date created',
        icon: <Time />,
      },
      {
        id: uuid(),
        name: 'Date Modified',
        icon: <Time />,
      },
    ],
  },
  // {
  //   id: uuid(),
  //   name: 'Fevorite',
  //   icon: <Heart />,
  // },
  {
    id: uuid(),
    name: 'Download PDF',
    icon: <Document />,
    disabled: true,
  },
  // {
  //   id: uuid(),
  //   name: 'Download this file',
  //   icon: <Download />,
  // },
  {
    id: uuid(),
    name: 'Deep submenu',
    isSubMenu: true,
    icon: <Expand />,
    items: [
      {
        id: uuid(),
        name: 'Option',
        icon: <Search />,
      },
      {
        id: uuid(),
        name: 'Another option',
        icon: <Home />,
      },
      {
        id: uuid(),
        name: 'Deep',
        icon: <Expand />,
        isSubMenu: true,
        items: [
          {
            id: uuid(),
            name: 'Deep option 1',
            icon: <Heart />,
          },
          {
            id: uuid(),
            name: 'Deep option 2',
            icon: <Download />,
          },
          {
            id: uuid(),
            name: 'Deep option 3',
            icon: <Document />,
          },
        ],
      },
    ],
  },
];
