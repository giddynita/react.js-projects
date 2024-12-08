import { useDispatch, useSelector } from 'react-redux'
import { formatPrice } from '../utils'
import {
  handleEquipmentPriceFilter,
  handlePriceFilter,
  handleNutritionPriceFilter,
} from '../features/products/productsFiltersSlice'
import { BsDash } from 'react-icons/bs'

const Range = ({ label, name, products }) => {
  const findLeastPrice = (arr) => {
    return arr.reduce((min, current) => {
      return current.productPrice < min.productPrice ? current : min
    })
  }
  const findMAxPrice = (arr) => {
    return arr.reduce((max, current) => {
      return current.productPrice > max.productPrice ? current : max
    })
  }

  const maxProduct = findMAxPrice(products)
  const leastProduct = findLeastPrice(products)
  const dispatch = useDispatch()
  /*  const setMaxPrice = (price) => {
    dispatch(handlePriceFilter({ price }))
  }
  setMaxPrice(maxProduct.productPrice) */

  /* const selectedEquipmentPrice = useSelector(
    (state) => state.productState.equipment
  )
  const selectedNutritionPrice = useSelector(
    (state) => state.productState.nutrition
  ) */

  const handlePriceChange = (price) => {
    dispatch(handlePriceFilter({ price }))
  }
  /* const handleEquipmentPriceChange = (equipment) => {
    dispatch(handleEquipmentPriceFilter({ equipment }))
  }
  const handleNutritionPriceChange = (nutrition) => {
    dispatch(handleNutritionPriceFilter({ nutrition }))
  } */
  const selectedPrice = useSelector((state) => state.productState.price)
  const step = (maxProduct.productPrice - leastProduct.productPrice) / 10
  return (
    <div className="form-control">
      <label
        htmlFor={label}
        className="flex justify-between text-accent/50 font-bold mb-3 text-xs"
      >
        <span className="font-semibold text-md">
          min:{formatPrice(leastProduct.productPrice)}
        </span>
        <span className="font-semibold text-md">
          max:{formatPrice(maxProduct.productPrice)}
        </span>
      </label>
      {
        <>
          <input
            type="range"
            name={name}
            min={leastProduct.productPrice}
            max={maxProduct.productPrice}
            value={selectedPrice || maxProduct.productPrice}
            onChange={(e) => {
              handlePriceChange(e.target.value)
            }}
            step={step}
          />
          <div
            className="w-full flex items-center  text-xs  mt-3 text-accent/50 font-semibold gap-x-1.5"
            style={{
              display:
                selectedPrice == leastProduct.productPrice ? 'none' : 'flex',
            }}
          >
            <span className="capitalize">Price range: </span>
            <span className="flex items-center gap-x-0.5">
              {formatPrice(leastProduct.productPrice)} <BsDash />
              {formatPrice(selectedPrice || maxProduct.productPrice)}
            </span>
          </div>
        </>
      }
      {/* {name === 'equipment' && (
        <>
          <input
            type="range"
            name={name}
            min={leastProduct.productPrice}
            max={maxProduct.productPrice}
            value={selectedEquipmentPrice}
            onChange={(e) => {
              handleEquipmentPriceChange(e.target.value)
            }}
            step={step}
            className={`range range-primary range-md`}
          />
          <div
            className="w-full flex items-center  text-xs  mt-3 text-accent/50 font-semibold gap-x-1.5"
            style={{
              display:
                selectedEquipmentPrice == leastProduct.productPrice
                  ? 'none'
                  : 'flex',
            }}
          >
            <span className="capitalize">Price range: </span>
            <span>
              {formatPrice(leastProduct.productPrice)} -{' '}
              {formatPrice(selectedEquipmentPrice)}
            </span>
          </div>
        </>
      )}
      {name === 'nutrition' && (
        <>
          <input
            type="range"
            name={name}
            min={leastProduct.productPrice}
            max={maxProduct.productPrice}
            value={selectedNutritionPrice}
            onChange={(e) => {
              handleNutritionPriceChange(e.target.value)
            }}
            step={step}
            className={`range range-primary range-md`}
          />
          <div
            className="w-full flex items-center  text-xs  mt-3 text-accent/50 font-semibold gap-x-1.5"
            style={{
              display:
                selectedNutritionPrice == leastProduct.productPrice
                  ? 'none'
                  : 'flex',
            }}
          >
            <span className="capitalize">Price range: </span>
            <span>
              {formatPrice(leastProduct.productPrice)} -{' '}
              {formatPrice(selectedNutritionPrice)}
            </span>
          </div>
        </>
      )} */}
    </div>
  )
}
export default Range
