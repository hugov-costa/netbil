import { lazy } from 'react'

const DashboardAnalytics = lazy(() => import('../../views/home'))

const DashboardHome = [
  {
    path: '/home',
    element: <DashboardAnalytics />
  },
]

export default DashboardHome
