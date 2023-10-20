import Header from './Header'
import Footer from './Footer'
import Menu from './Menu'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <header>
        <Header />
        <Menu />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default Layout
