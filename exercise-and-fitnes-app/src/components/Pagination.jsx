import { useDispatch, useSelector } from 'react-redux'
import { formatPageNumber } from '../utils'
import { handlePagination } from '../features/products/productsFiltersSlice'
import { FaBackward, FaForward } from 'react-icons/fa'

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
  const forward =
    selectedPage == totalPages.length - 1
      ? totalPages.length + 1
      : selectedPage + 3
  const filterTotalPages = totalPages.filter((_, index) => index < forward)
  const adjustStyle =
    selectedPage == 0 ? 'justify-center w-max' : 'justify-end w-[9rem]'
  const adjustContainerStyle =
    selectedPage == 0
      ? 'w-[11rem]'
      : selectedPage == totalPages.length - 1 && totalPages.length > 3
      ? 'w-[13rem]'
      : totalPages.length < 3
      ? 'w-[7.5rem]'
      : 'w-[15rem]'

  return (
    <div className={`flex ${adjustContainerStyle} mx-auto`}>
      {selectedPage !== 0 && (
        <button
          type="button"
          className="text-white w-max text-xs bg-primary px-3 rounded"
          onClick={() => {
            if (selectedPage > 0) handlePageChange(selectedPage - 1)
          }}
        >
          <FaBackward />
        </button>
      )}
      <div
        className={` mx-auto flex  gap-x-1.5 text-xs overflow-hidden relative ${adjustStyle}`}
      >
        {filterTotalPages.map((page, index) => {
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
      </div>
      {totalPages.length > 3 && selectedPage !== totalPages.length - 1 && (
        <button
          type="button"
          className="text-white w-max text-xs bg-primary px-3 rounded"
          onClick={() => {
            if (selectedPage < totalPages.length - 1)
              handlePageChange(selectedPage + 1)
          }}
        >
          <FaForward />
        </button>
      )}
    </div>
  )
}
export default Pagination
