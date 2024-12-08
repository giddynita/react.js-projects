import { GoDotFill } from 'react-icons/go'
import Heading from './Heading'
import { useDispatch, useSelector } from 'react-redux'
import { handleProductsBrandsFilter } from '../features/products/productsFiltersSlice'
import { useLoaderData } from 'react-router-dom'

const ProductBrandSection = () => {
  const { productsList } = useLoaderData()
  const dispatch = useDispatch()
  const handleBrandFilter = (brand) => {
    dispatch(handleProductsBrandsFilter({ brand }))
  }
  const brandState = useSelector((state) => state.productState.brand)
  const blank = ''
  return (
    <>
      <Heading text="product brands" margin="mb-3" size="text-[1rem]" />
      <ul className="flex flex-row flex-wrap gap-1.5 text-white">
        {productsList.map(({ productBrand }, index) => {
          const background =
            productBrand === brandState
              ? 'bg-secondary hover:bg-secondary scale-[1.03]'
              : 'bg-primary hover:bg-primary'
          return (
            <li key={index}>
              {productBrand && (
                <span
                  className={`relative bg-primary flex items-center pb-0.5 pt-0.5 pr-3 gap-x-0.5 pl-1.5 clip rounded-r-md cursor-pointer hover:scale-[1.03] ${background} capitalize`}
                  onClick={() => {
                    productBrand === brandState
                      ? handleBrandFilter(blank)
                      : handleBrandFilter(productBrand)
                  }}
                >
                  <GoDotFill className="text-[0.4rem]" />
                  {productBrand}
                </span>
              )}
            </li>
          )
        })}
      </ul>
    </>
  )
}
export default ProductBrandSection
