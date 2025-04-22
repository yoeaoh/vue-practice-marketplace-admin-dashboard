import { IconName } from '@/enums/IconName.ts'
import { RouteName } from '@/enums/RouteName.ts'

export const sidebarMenuItems = [
  {
    id: 1,
    icon: IconName.USER,
    route: RouteName.LOGIN,
    title: 'Login page test',
  },
  {
    id: 2,
    icon: IconName.DASHBOARD,
    route: RouteName.DASHBOARD,
    title: 'Dashboard',
  },
  {
    id: 3,
    icon: IconName.PRODUCTS,
    route: RouteName.PRODUCTS,
    title: 'Products',
  },
  {
    id: 4,
    icon: IconName.ORDERS,
    route: RouteName.ORDERS,
    title: 'Orders',
  },
  {
    id: 5,
    icon: IconName.USERS,
    route: RouteName.USERS,
    title: 'Users',
  },
  {
    id: 6,
    icon: IconName.BLOG,
    route: RouteName.BLOG,
    title: 'Blog',
  },
]
