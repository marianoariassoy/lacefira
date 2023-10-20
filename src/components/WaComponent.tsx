import { Whatsapp } from '../icons/icons'

const WaComponent = () => {
  return (
    <a
      href='https://wa.me/'
      target='_blank'
      rel='noreferrer'
      className='fixed z-20 bottom-8 right-8 drop-shadow hover:rotate-12 transition-all duration-300 hover:text-black text-primary opacity-0 fade-in-3'
    >
      <Whatsapp />
    </a>
  )
}

export default WaComponent
