import Select from './Select'

const list = [
  'Default sorting',
  'Sort by popularity',
  'Sort by average rating',
  'Sort by latest',
  'Sort by price: low to high',
  'Sort by price: high to low',
]
const page = [
  '9 Products per page',
  '18 Products per page',
  '27 Products per page',
]

const Filters = () => {
  return (
    <div className="flex flex-col gap-1.5 md:flex-row justify-between">
      <Select name="sorting" list={list} />
      <Select name="pagination" list={page} />
    </div>
  )
}
export default Filters
