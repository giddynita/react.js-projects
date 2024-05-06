import { GoDotFill } from 'react-icons/go'
import Heading from './Heading'
import { useDispatch, useSelector } from 'react-redux'
import { handleProductsBrandsFilter } from '../features/products/productsFiltersSlice'
const tags = [
  'Beforemath',
  'Higher',
  'Humane Labs Raid',
  "Ol' English",
  'On Fire',
  'Pacific Standard',
]

const ProductBrandSection = () => {
  const dispatch = useDispatch()
  const handleBrandFilter = (brand) => {
    dispatch(handleProductsBrandsFilter({ brand }))
  }
  const brandState = useSelector((state) => state.productState.brand)
  return (
    <>
      <Heading text="product brands" margin="mb-3" />
      <ul className="flex flex-row flex-wrap gap-1.5 text-white">
        {tags.map((tag, index) => {
          const background = tag === brandState ? 'bg-secondary' : ''
          return (
            <li
              key={index}
              className={`relative bg-primary flex items-center pb-0.5 pt-0.5 pr-3 gap-x-0.5 pl-1.5 clip rounded-r-md cursor-pointer hover:bg-secondary ${background}`}
              onClick={() => {
                handleBrandFilter(tag)
              }}
            >
              <GoDotFill className="text-[0.4rem]" />
              {tag}
            </li>
          )
        })}
      </ul>
    </>
  )
}
export default ProductBrandSection
