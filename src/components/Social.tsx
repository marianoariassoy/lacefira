import { Facebook, Instagram, Linkedln } from '../icons/icons'

const Social = () => {
  return (
    <nav className='flex gap-x-4'>
      <a
        href='#'
        target='_blank'
        rel='noreferrer'
        className='hover:text-black'
      >
        <Facebook />
      </a>
      <a
        href='#'
        target='_blank'
        rel='noreferrer'
        className='hover:text-black'
      >
        <Instagram />
      </a>
      <a
        href='#/'
        target='_blank'
        rel='noreferrer'
        className='hover:text-black'
      >
        <Linkedln />
      </a>
    </nav>
  )
}

export default Social
