import { Header, Navbar, SubLinks } from '../components'

const Layout = () => {
  return (
    <>
      <Header />
      <div className="relative w-[90%] mx-auto max-w-screen-lg">
        <Navbar />
        <SubLinks />
      </div>
    </>
  )
}
export default Layout
