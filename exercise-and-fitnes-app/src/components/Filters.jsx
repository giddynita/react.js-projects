import Select from './Select'

const list = [
  'Default sorting',
  'Sort by popularity',
  'Sort by average rating',
  'Sort by latest',
  'Sort by price: low to high',
  'Sort by price: high to low',
]
const pageNumber = [9, 18, 27]

const Filters = () => {
  return (
    <div className="flex flex-col gap-1.5 md:flex-row justify-between">
      <Select name="sorting" list={list} />
      <Select
        name="products-per-page"
        list={pageNumber}
        constant="Products per page"
      />
    </div>
  )
}
export default Filters
