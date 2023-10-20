import { useState } from 'react'
import { DotLottiePlayer } from '@dotlottie/react-player'
import { useInView } from 'react-intersection-observer'
import Modal from '../components/Modal'
import useFetch from '../hooks/useFetch'
import TextHTML from '../hooks/useHTML'
import Loader from '../components/Loader'

const Recetas = () => {
  const { data, loading } = useFetch(`/textos`)
  const { data: recetas, loading: loadingRecetas } = useFetch(`/recetas`)

  const [currentVideo, setCurrentVideo] = useState(null)

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3
  })
  const [ref2, inView2] = useInView({
    triggerOnce: false,
    threshold: 0.3
  })

  return (
    <>
      <section
        className='max-w-7xl m-auto px-8 pt-24'
        id='recetas'
      >
        <div className='grid lg:grid-cols-2 mb-8'>
          <div
            ref={ref}
            className={`opacity-0 ${inView ? 'fade-in' : ''}`}
          >
            <hr className='border-primary border-b-2 mb-3 w-10' />
            <h1 className='text-primary text-2xl lg:text-3xl font-semibold mb-14'>Nuestras Recetas</h1>
            <p className='mb-16'>{loading ? <Loader /> : <TextHTML text={data[2].text} />}</p>
            <div className='grid grid-cols-2 gap-12 mb-8'>
              {!loadingRecetas &&
                recetas.map((item, index) => (
                  <article
                    className='flex gap-x-8 items-center hover:gap-x-7 transition-all cursor-pointer'
                    key={index}
                    onClick={() => setCurrentVideo(item.url)}
                  >
                    <div>
                      <img src='/assets/play.svg' />
                    </div>
                    <div className='font-semibold'>{item.title}</div>
                  </article>
                ))}
            </div>
          </div>
          <div className='relative'>
            <div className='absolute right-0 mt-20'>
              <p>
                Sabores{' '}
                <span className='font-bold'>
                  genuinos y <br /> nobles.
                </span>
              </p>
              <hr className='border-black  mt-3 w-10' />
            </div>
            <div
              className={`-mt-8 flex justify-center px-16 opacity-0 ${inView2 ? 'fade-in-2' : ''}`}
              ref={ref2}
            >
              <DotLottiePlayer
                src='/lotties/mujer-olla.lottie'
                autoplay
                loop
                style={{ width: '100%', maxWidth: '350px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {currentVideo && (
        <Modal
          currentVideo={currentVideo}
          setCurrentVideo={setCurrentVideo}
        />
      )}
    </>
  )
}

export default Recetas
