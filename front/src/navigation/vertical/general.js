// ** Icons Import
import { Activity, Calendar, CreditCard } from 'react-feather'

export default [
  {
    id: 'calendar',
    title: 'Calendário',
    icon: <Calendar size={20} />,
    navLink: '/calendario'
  },
  {
    id: 'timeline',
    title: 'Timeline',
    icon: <Activity size={20} />,
    navLink: '/timeline'
  },
  {
    id: 'payments',
    title: 'Pagamentos',
    icon: <CreditCard size={20} />,
    navLink: '/pagamentos'
  }
]
