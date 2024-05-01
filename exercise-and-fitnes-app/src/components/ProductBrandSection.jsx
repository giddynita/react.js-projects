import { GoDotFill } from 'react-icons/go'
import Heading from './Heading'
const tags = [
  'Beforemath',
  'Higher',
  'Humane Labs Raid',
  "Ol' English",
  'On Fire',
  'Pacific Standard',
]

const ProductBrandSection = () => {
  return (
    <>
      <Heading text="product brands" margin="mb-3" size="text-xs" />
      <ul className="flex flex-row flex-wrap gap-1.5 text-white ">
        {tags.map((tag, index) => {
          return (
            <li
              key={index}
              className="relative bg-primary flex items-center pb-0.5 pt-0.5 pr-3 gap-x-0.5 pl-1.5 clip rounded-r-md cursor-pointer hover:scale-[1.03] "
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
