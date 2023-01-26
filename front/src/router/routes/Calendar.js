import { lazy } from 'react'

const DashboardCalendar = lazy(() => import('../../views/calendar'))

const Calendar = [
  {
    path: '/calendario',
    element: <DashboardCalendar />
  }
]

export default Calendar
