import { useEffect } from 'react'
import Layout from '../layout/Layout'
import Fabrica from './Fabrica'
import Hero from './Hero'
import Productos from './Productos'
import Venta from './Venta'
import Recetas from './Recetas'
import Pasta from './Pasta'
import Contacto from './Contacto'
import scroll from '../utils/scroll'

const Home = () => {
  useEffect(() => {
    scroll()
  }, [])

  return (
    <Layout>
      <Hero />
      <Fabrica />
      <Productos />
      <Venta />
      <Recetas />
      <Pasta />
      <Contacto />
    </Layout>
  )
}

export default Home
