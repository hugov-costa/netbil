// ** Icons Import
import { Activity, Calendar, CreditCard } from 'react-feather'

export default [
  {
    id: 'calendar',
    title: 'Calendário',
    icon: <Calendar />,
    navLink: '/calendario'
  },
  {
    id: 'timeline',
    title: 'Timeline',
    icon: <Activity />,
    navLink: '/timeline'
  },
  {
    id: 'payments',
    title: 'Pagamentos',
    icon: <CreditCard />,
    navLink: '/pagamentos'
  }
]
