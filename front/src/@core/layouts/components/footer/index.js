// ** Icons Import
import { Heart } from 'react-feather'

const Footer = () => {
  return (
    <p className='clearfix mb-0'>
      <span className='float-md-start d-block d-md-inline-block mt-25'>
        Me contate (e contrate) pelo&nbsp;
        <a href='https://github.com/hugov-costa' target='_blank' rel='noopener noreferrer'>
          GitHub
        </a>
        <span className='d-none d-sm-inline-block'>&nbsp;ou&nbsp;</span>
        <a href='https://www.linkedin.com/in/hugocostadev/' target='_blank' rel='noopener noreferrer'>
          LinkedIn
        </a>
        <span className='d-none d-sm-inline-block'>.</span>
      </span>
      <span className='float-md-end d-none d-md-block'>
        Feito com revolta operária e
        <Heart size={14} />
      </span>
    </p>
  )
}

export default Footer
