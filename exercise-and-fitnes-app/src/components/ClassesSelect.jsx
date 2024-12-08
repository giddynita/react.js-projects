import { useDispatch } from 'react-redux'
import {
  handleClassDifficultyFilter,
  handleClassTypeFilter,
} from '../features/classes/classesSlice'

const ClassesSelect = ({ name, options }) => {
  const dispatch = useDispatch()
  const classTypeFilter = (value) => {
    dispatch(handleClassTypeFilter({ type: value }))
  }
  const classDifficultyFilter = (value) => {
    dispatch(handleClassDifficultyFilter({ difficulty: value }))
  }
  return (
    <select
      name={name}
      id={name}
      className="select select-sm border border-gray-300 rounded-md outline-none focus:outline-none capitalize cursor-pointer text-gray-600 w-44"
      onChange={(e) => {
        const value = e.target.value
        if (name === 'type') {
          classTypeFilter(value)
        }
        if (name === 'difficulty') {
          classDifficultyFilter(value)
        }
      }}
    >
      {options.map((item, index) => {
        return (
          <option value={item} key={index} className="">
            {item}
          </option>
        )
      })}
    </select>
  )
}
export default ClassesSelect
