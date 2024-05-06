import { useSelector } from 'react-redux'
import { AdvancedFilter, Carousel, Filters, Products } from '../components'

const Shop = () => {
  return (
    <>
      <Carousel />
      <div className="lg:grid lg:grid-cols-7 w-[90%] mx-auto max-w-screen-lg gap-x-14">
        <div className="py-10 lg:col-span-5">
          <Filters />
          <Products />
        </div>
        <div className="hidden lg:flex lg:col-span-2 pt-10">
          <AdvancedFilter />
        </div>
      </div>
    </>
  )
}
export default Shop
