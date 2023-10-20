import { useState } from 'react'
import { DotLottiePlayer } from '@dotlottie/react-player'
import { useInView } from 'react-intersection-observer'
import useFetch from '../hooks/useFetch'
import TextHTML from '../hooks/useHTML'
import Loader from '../components/Loader'

const Fabrica = () => {
  const { data, loading } = useFetch(`/textos`)
  const [more, setMore] = useState(false)

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
      className='max-w-7xl m-auto items-start px-8 pt-8 lg:pt-24 lg:flex gap-8 relative'
      id='la-fabrica'
    >
      <div className='absolute top-8 h-40 left-1/4 linea-vertical opacity-0 fade-in-3'></div>

      <div className='lg:w-[33%]'>
        <div
          className={`opacity-0 flex justify-center px-12 mb-8 lg:px-0 ${inView ? 'fade-in-2' : ''}`}
          ref={ref}
        >
          <DotLottiePlayer
            src='/lotties/mujer-sorrentinos.lottie'
            autoplay
            loop
            style={{ width: '90%' }}
          />
        </div>
      </div>
      <div
        className={`lg:w-[66%] bg-primary p-10 lg:p-20 text-white opacity-0 ${inView2 ? 'fade-in' : ''}`}
        ref={ref2}
      >
        <h1 className='text-2xl lg:text-3xl font-semibold mb-8 flex justify-start'>
          <div className='flex items-end flex-col'>
            La Fábrica <hr className='border-white border-b-2 mt-3 w-10' />
          </div>
        </h1>
        <p
          className='text-wrap'
          id='block-1'
        >
          {loading ? <Loader /> : <TextHTML text={data[0].text} />}
        </p>
        {more && (
          <p
            className='mt-4'
            id='block-2'
          >
            {data && <TextHTML text={data[0].text2} />}
          </p>
        )}

        <button
          className='mt-8 bg-white text-primary py-4 px-8 inline-block
         hover:bg-black hover:text-white'
          onClick={() => setMore(!more)}
        >
          {more ? 'Ver menos' : 'Ver más'}
        </button>
      </div>
    </section>
  )
}

export default Fabrica
