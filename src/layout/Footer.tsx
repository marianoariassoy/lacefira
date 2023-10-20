import { Logo } from '../icons/icons'
import { nav } from '../data/data'
import Social from '../components/Social'

const Footer = () => {
  return (
    <section className='px-8 lg:px-16 py-16 flex justify-between text-white bg-primary'>
      <div>
        <nav className='mb-8'>
          <ul className='flex flex-col'>
            {nav.map(item => (
              <li key={item.title}>
                <a
                  href={item.path}
                  className='scroll hover:text-black'
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className='2xl:text-xl'>
          <Social />
        </div>
      </div>
      <div className='logo'>
        <Logo />
      </div>
    </section>
  )
}

export default Footer
