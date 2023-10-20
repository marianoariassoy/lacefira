const scroll = () => {
  // go to section
  const menuLinks = document.querySelectorAll('.scroll')

  menuLinks.forEach(link => {
    link.addEventListener('click', smoothScroll)
  })

  function smoothScroll(e: Event) {
    e.preventDefault()
    const targetId = this.getAttribute('href')
    const targetElement = document.querySelector(targetId)
    window.scrollTo({
      top: targetElement.offsetTop - 80,
      behavior: 'smooth'
    })
  }

  // active section
  // window.addEventListener('scroll', () => {
  //   const sections = document.querySelectorAll('section')
  //   console.log(sections)
  //   const navLinks = document.querySelectorAll('.nav-main .scroll')

  //   sections.forEach((section, index) => {
  //     const rect = section.getBoundingClientRect()
  //     if (rect.top <= 50 && rect.bottom >= 50) {
  //       navLinks.forEach(link => link.classList.remove('text-primary'))
  //       navLinks[index].classList.add('text-primary')
  //     }
  //   })
  // })

  // header small
  const header = document.querySelector('header section')
  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY
    if (currentScroll > 10) {
      header?.classList.add('header-small')
      header?.classList.add('backdrop-blur')
      header?.classList.add('bg-white/50')
      return
    } else {
      header?.classList.remove('header-small')
      header?.classList.remove('backdrop-blur')
      header?.classList.remove('bg-white/50')
    }
  })
}

export default scroll
