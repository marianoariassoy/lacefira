import { products } from '../data/data'
import { useInView } from 'react-intersection-observer'
import useFetch from '../hooks/useFetch'
import TextHTML from '../hooks/useHTML'
import Loader from '../components/Loader'

const Productos = () => {
  const { data, loading } = useFetch(`/textos`)

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3
  })
  const [ref2, inView2] = useInView({
    triggerOnce: false,
    threshold: 0.3
  })
  const [ref3, inView3] = useInView({
    triggerOnce: false,
    threshold: 0.3
  })

  return (
    <section
      className='max-w-7xl m-auto px-8 pb-24 pt-12 lg:pt-4'
      id='productos'
    >
      <div
        className={`grid lg:grid-cols-2 mb-12 opacity-0 lg:mb-24 ${inView ? 'fade-in' : ''}`}
        ref={ref}
      >
        <div>
          <h1 className='text-primary text-2xl lg:text-3xl font-semibold'>Productos</h1>
          <hr className='border-primary border-b-2 mt-3 w-10 mb-14' />
          <p className='text-wrap mb-14 text-sm'>{loading ? <Loader /> : <TextHTML text={data[1].text} />}</p>
          <a
            href='#'
            className='bg-primary text-white  py-4 px-8 inline-block hover:bg-black hover:text-white'
          >
            Nuestro Catálogo
          </a>
        </div>
        <div className='flex justify-end mt-12 -ml-10 lg:ml-0 lg:-mt-16 pr-20'>
          <div
            className={`opacity-0 ${inView2 ? 'fade-in' : ''}`}
            ref={ref2}
          >
            <img src='https://marianoarias.soy/sites/cefira-backend/images-statics/productos.webp' />
          </div>
        </div>
      </div>
      <div
        className={`grid grid-cols-2 lg:grid-cols-5 gap-6 opacity-0 ${inView3 ? 'fade-in-2' : ''}`}
        ref={ref3}
      >
        {products.map(product => (
          <article key={product.title}>
            <div className=''>
              <img
                src={product.image}
                alt={product.title}
                className='w-full aspect-square'
              />
            </div>
            <span className='bg-primary text-white py-4 px-8  text-center block'>{product.title}</span>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Productos
