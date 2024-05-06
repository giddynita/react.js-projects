import { useDispatch, useSelector } from 'react-redux'
import {
  handlePerPageFilter,
  handleColorFilter,
  handlePerPageState,
  handleColorState,
} from '../features/products/productsFiltersSlice'

const Select = ({ name, list, constant }) => {
  const dispatch = useDispatch()
  const handleProductsPerPageFilter = (value) => {
    dispatch(handlePerPageFilter({ productsPerPage: value }))
  }
  const handleColorTypeFilter = (value) => {
    dispatch(handleColorFilter({ productColor: value }))
  }
  return (
    <div className="form-control">
      <select
        name={name}
        id={name}
        className="select border-accent/20 text-accent/60 bg-base-100 select-sm w-48 focus:border-none"
        onChange={(e) => {
          const value = e.target.value
          if (name === 'products-per-page') {
            const number = value.slice(0, 2)
            handleProductsPerPageFilter(number)
            dispatch(handlePerPageState({ perPageNumber: number }))
          }
          if (name === 'color') {
            const color = value
            handleColorTypeFilter(color)
            dispatch(handleColorState({ colorType: color }))
          }
        }}
      >
        {list?.map((item) => {
          return (
            <option key={item}>
              {item} {constant}
            </option>
          )
        })}
      </select>
    </div>
  )
}
export default Select
