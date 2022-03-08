// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill')
  },
  {
    title: 'users',
    path: '/dashboard/users',
    icon: getIcon('eva:people-fill')
  },
  {
    title: 'shops',
    path: '/dashboard/shops',
    icon: getIcon('entypo:shop')
  },
  {
    title: 'product',
    path: '/dashboard/products',
    icon: getIcon('eva:shopping-bag-fill')
  }
];

export default sidebarConfig;
