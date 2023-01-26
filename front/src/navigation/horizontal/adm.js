// ** Icons Import
import { Briefcase, DollarSign, Users, Layers, Archive } from 'react-feather'

export default [
  {
    id: 'adm',
    title: 'Administrativo',
    icon: <Briefcase />,
    children: [
      {
        id: 'pupils',
        title: 'Alunos',
        icon: <Users />,
        navLink: '/apps/email'
      },
      {
        id: 'receipts',
        title: 'Comprovantes',
        icon: <Archive />,
        navLink: '/apps/chat'
      },
      {
        id: 'inventory',
        title: 'Estoque',
        icon: <Layers />,
        navLink: '/apps/todo'
      },
      {
        id: 'finances',
        title: 'Financeiro',
        icon: <DollarSign />,
        navLink: '/apps/calendar'
      }
    ]
  }
]
