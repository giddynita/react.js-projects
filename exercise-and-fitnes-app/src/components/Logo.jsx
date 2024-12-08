import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <h2 className="uppercase text-2xl tracking-wider text-gray-700 font-bold">
      <Link to="/">
        forge<span className="bg-green-500 text-white px-1">fit</span>
      </Link>
    </h2>
  )
}
export default Logo
