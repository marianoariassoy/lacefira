import { useInView } from 'react-intersection-observer'
import { DotLottiePlayer } from '@dotlottie/react-player'
import useFetch from '../hooks/useFetch'
import Loader from '../components/Loader'

const Venta = () => {
  const { data, loading } = useFetch(`/puntos-de-venta`)

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3
  })

  return (
    <section
      className='bg-primary'
      id='puntos-de-venta'
    >
      <div
        className={`max-w-7xl m-auto px-8 py-24 lg:flex gap-8 opacity-0 text-white ${inView ? 'fade-in' : ''}`}
        ref={ref}
      >
        <div className='lg:w-1/3'>
          <h1 className='text-2xl lg:text-3xl font-semibold'>Puntos de Venta</h1>
          <hr className='border-white border-b-2 mt-3 w-10 mb-8 ml-12' />
          <div className='-mt-8 flex justify-center lg:justify-start'>
            <DotLottiePlayer
              src='/lotties/punto-de-venta.lottie'
              autoplay
              loop
              style={{ width: '200px' }}
            />
          </div>

          <p>
            Pastas rellenas <br /> como recién <span className='italic font-medium'>amasadas.</span>
          </p>
          <hr className='border-white mt-3 w-10 mb-12' />
        </div>
        {loading ? (
          <Loader />
        ) : (
          <div className='grid grid-cols-2 gap-12 lg:grid-cols-3 lg:gap-x-24 lg:w-4/6'>
            {data.map((item, index) => (
              <article key={index}>
                <div className='px-2 border-b-2 border-white h-24 mb-2'>
                  <h2 className='uppercase font-bold'>{item.title}</h2>
                  <p>{item.text}</p>
                </div>
                <div className='px-2'>
                  {item.url && (
                    <a
                      href={item.url}
                      target='_blank'
                      className='font-bold hover:text-black'
                      rel='noopener noreferrer'
                    >
                      Ver en Mapa
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Venta
