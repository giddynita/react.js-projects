import { AdvancedFilter, Carousel, Filters, Products } from '../components'
import image1 from '../assets/images/e-book icon.png'

const products = [
  {
    productImage: image1,
    productName: 'E-book',
    productRatings: 3,
    productPrice: 2000,
    category: 'equipment',
    topRated: true,
  },
  {
    productImage: image1,
    productName: 'E-book',
    productRatings: 4,
    productPrice: 2000,
    category: 'equipment',
    topRated: true,
  },
  {
    productImage: image1,
    productName: 'E-book',
    productRatings: 4,
    productPrice: 2000,
    category: 'nutrition',
    topRated: true,
  },
  {
    productImage: image1,
    productName: 'E-book',
    productRatings: 4,
    productPrice: 2000,
    category: 'nutrition',
    topRated: true,
  },
  {
    productImage: image1,
    productName: 'E-book',
    productRatings: 4,
    productPrice: 2000,
    category: 'nutrition',
    topRated: true,
  },
  {
    productImage: image1,
    productName: 'E-book',
    productRatings: 4,
    productPrice: 2000,
    category: 'nutrition',
    topRated: true,
  },
  {
    productImage: image1,
    productName: 'E-book',
    productRatings: 4,
    productPrice: 2000,
    category: 'nutrition',
    topRated: true,
  },
  {
    productImage: image1,
    productName: 'E-book',
    productRatings: 4,
    productPrice: 2000,
    category: 'nutrition',
    topRated: true,
  },
  {
    productImage: image1,
    productName: 'E-book',
    productRatings: 4,
    productPrice: 2000,
    category: 'nutrition',
    topRated: true,
  },
]

const Shop = () => {
  return (
    <>
      <Carousel />
      <div className="lg:grid lg:grid-cols-7 w-[90%] mx-auto max-w-screen-lg gap-x-14">
        <div className="py-10 lg:col-span-5">
          <Filters />
          <Products products={products} />
        </div>
        <div className="hidden lg:flex lg:col-span-2 pt-10">
          <AdvancedFilter products={products} />
        </div>
      </div>
    </>
  )
}
export default Shop
