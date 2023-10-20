import { nav } from '../data/data'

const Menu = () => {
  const closeMenu = () => {
    document.querySelector('.nav-menu')?.classList.toggle('active')
    document.querySelector('.menu-mobile')?.classList.toggle('hidden')
  }

  return (
    <nav
      className='fixed fade-in w-full h-full text-primary bg-white/50 top-0 text-center grid content-center menu-mobile z-40 backdrop-blur hidden'
      onClick={closeMenu}
    >
      <ul className='flex flex-col gap-y-4 font-medium'>
        {nav.map(item => (
          <li key={item.title}>
            <a
              href={item.path}
              className='scroll'
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Menu
