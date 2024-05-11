import { useDispatch, useSelector } from 'react-redux'
import { formatPageNumber } from '../utils'
import { handlePagination } from '../features/products/productsFiltersSlice'

const Pagination = ({ searchAndPriceFilteredWithColorAndBrand }) => {
  const { productsPerPage, selectedPage } = useSelector((state) => {
    return state.productState
  })
  const dispatch = useDispatch()
  const handlePageChange = (selectedPage) => {
    dispatch(handlePagination({ selectPage: selectedPage }))
  }
  const totalPages = formatPageNumber(
    searchAndPriceFilteredWithColorAndBrand,
    productsPerPage
  )

  return (
    <div className="w-full flex justify-center gap-x-1.5 text-xs">
      {totalPages.map((page, index) => {
        const active = index === selectedPage ? 'bg-primary text-white' : ''
        return (
          <button
            key={index}
            type="button"
            className={`py-1.5 px-3 bg-base-200/70 text-accent/80 rounded-sm ${active}`}
            onClick={() => {
              handlePageChange(index)
            }}
          >
            {page}
          </button>
        )
      })}
      {totalPages.length > 3 && (
        <button type="button" className="text-primary">
          Next
        </button>
      )}
    </div>
  )
}
export default Pagination
