import WhatsApp from '../components/WaComponent'
import { DotLottiePlayer } from '@dotlottie/react-player'

const Hero = () => {
  return (
    <section
      className='m-auto max-w-7xl lg:flex items-center px-8 mt-40 lg:mt-32 2xl:mt-48 gap-8'
      id='home'
    >
      <div className='lg:w-[33%] relative hidden lg:block'>
        <div className='absolute z-20 border-b border-primary w-64 bg-primary left-2/4 ml-20 top-32 fade-in-3  opacity-0'></div>
        <div className='justify-center fade-in-3 opacity-0'>
          <DotLottiePlayer
            src='/lotties/bowls-mujer.lottie'
            autoplay
            loop
            style={{ width: '85%' }}
          />
        </div>
      </div>
      <div className='lg:w-[66%]'>
        <div className='relative scale-0 fade-in-scale'>
          <img
            src='/images/curita.png'
            className='absolute bottom-0 -mb-8 -ml-12 z-10'
          />
          <img
            src='/images/curita.png'
            className='absolute right-0 -mt-10 -mr-12 z-10'
          />
          <img
            src='https://marianoarias.soy/sites/cefira-backend/images-statics/home.webp'
            alt='Imagen de presentación'
            className='w-full'
          />
        </div>

        <p className='text-wrap text-center fade-in-3 opacity-0 mt-8 '>
          Nuestros inicios se remontan a una mesa de madera repleta de historias familiares. De ese entorno heredamos la
          manera <span className='text-primary font-semibold'>italiana de hacer pasta.</span>
        </p>
      </div>

      <WhatsApp />
    </section>
  )
}

export default Hero
