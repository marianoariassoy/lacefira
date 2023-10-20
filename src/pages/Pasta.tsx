import { useInView } from 'react-intersection-observer'
import useFetch from '../hooks/useFetch'
import Loader from '../components/Loader'

const Pasta = () => {
  const { data, loading } = useFetch(`/pasta-del-mes`)

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3
  })

  return (
    <>
      <img
        src='/assets/bg-top.png'
        className='w-full'
        id='pasta-del-mes'
      />
      <section className='text-white relative bg-primary'>
        <div
          className={`max-w-7xl m-auto px-8 flex items-center gap-8 opacity-0 ${inView ? 'fade-in' : ''}`}
          ref={ref}
        >
          <div className='flex-grow basis-0'>
            <h1 className='text-2xl lg:text-3xl font-semibold'>Pasta del Mes</h1>
            <hr className='border-white border-b-2 mt-12 w-10 mb-4' />
          </div>
          <div className='flex flex-col items-center justify-center gap-4 '>
            {loading ? (
              <Loader />
            ) : (
              <>
                <img
                  src={data[0].image}
                  alt={data[0].title}
                  className='aspect-square object-cover w-80'
                />
                <h2 className='text-center font-semibold pb-8'>{data[0].title}</h2>
              </>
            )}
          </div>
          <div className='flex-grow basis-0 hidden lg:block'></div>
        </div>

        <img
          src='/assets/rayas.png'
          className='absolute right-0 lg:top-1/4 z-30'
        />
      </section>
      <img
        src='/assets/bg-bottom.png'
        className='w-full'
      />
    </>
  )
}

export default Pasta
