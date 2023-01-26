// ** Icons Import
import { Briefcase, DollarSign, Users, Layers, Archive } from 'react-feather'

export default [
  {
    id: 'adm',
    title: 'Administrativo',
    icon: <Briefcase size={20} />,
    children: [
      {
        id: 'pupils',
        title: 'Alunos',
        icon: <Users size={20} />,
        navLink: '/apps/email'
      },
      {
        id: 'receipts',
        title: 'Comprovantes',
        icon: <Archive size={20} />,
        navLink: '/apps/chat'
      },
      {
        id: 'inventory',
        title: 'Estoque',
        icon: <Layers size={20} />,
        navLink: '/apps/todo'
      },
      {
        id: 'finances',
        title: 'Financeiro',
        icon: <DollarSign size={20} />,
        navLink: '/apps/calendar'
      }
    ]
  }
]
