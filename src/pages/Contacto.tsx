import Form from '../components/Form'
import { DotLottiePlayer } from '@dotlottie/react-player'
import { useInView } from 'react-intersection-observer'

const Contacto = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3
  })
  const [ref2, inView2] = useInView({
    triggerOnce: false,
    threshold: 0.3
  })

  return (
    <section
      className='max-w-7xl m-auto px-8 py-24 lg:flex gap-8'
      id='contacto'
    >
      <div
        className={`lg:w-3/5 opacity-0 ${inView ? 'fade-in' : ''}`}
        ref={ref}
      >
        <h1 className='text-primary text-2xl lg:text-3xl font-semibold mb-12'>Contacto</h1>
        <Form />
      </div>
      <div className='lg:w-2/5 relative'>
        <div
          className={`opacity-0 ${inView2 ? 'fade-in-2' : ''}`}
          ref={ref2}
        >
          <DotLottiePlayer
            src='/lotties/mujer-fideos.lottie'
            autoplay
            loop
            style={{ width: '100%' }}
          />
        </div>

        <div className='absolute lg:left-16 lg:bottom-16'>
          <p>
            <span className='block font-bold'>Tel. 387-5890900</span>
            <a
              href='mailto:fabricalacefira@gmail.com'
              className='block font-bold hover:underline'
            >
              fabricalacefira@gmail.com
            </a>
            Salta Capital &bull; Argentina
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contacto
