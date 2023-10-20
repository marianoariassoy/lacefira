import Social from '../components/Social'
import { nav } from '../data/data'
import { Logo } from '../icons/icons'

const Header = () => {
  const OpenMenu = () => {
    document.querySelector('.nav-menu')?.classList.toggle('active')
    document.querySelector('.menu-mobile')?.classList.toggle('hidden')
  }

  return (
    <section className='w-full fixed z-50 px-8 2xl:px-16 pt-12 pb-4 flex transition-all items-end gap-x-4 justify-between'>
      <div className='flex-grow basis-0 opacity-0 fade-in'>
        <a
          href='#home'
          className='scroll text-primary logo block'
        >
          <Logo />
        </a>
      </div>
      <div className='opacity-0 fade-in-2 pb-2 2xl:pb-1'>
        <nav className='nav-main hidden lg:block'>
          <ul className='flex gap-x-6 2xl:gap-x-16 font-medium'>
            {nav.map(item => (
              <li key={item.title}>
                <a
                  href={item.path}
                  className='scroll hover-underline-animation'
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className='text-primary flex-grow basis-0 flex gap-x-6 justify-end 2xl:text-xl opacity-0 fade-in pb-3 2xl:pb-1'>
        <Social />

        <div
          className='nav-menu'
          onClick={OpenMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  )
}

export default Header
