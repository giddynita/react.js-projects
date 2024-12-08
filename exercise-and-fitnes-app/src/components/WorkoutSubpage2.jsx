import { MdArrowRight } from 'react-icons/md'
import {
  findYourWorkoutPlan,
  singleWorkouts,
  workoutPlans,
} from './WorkoutsSubPage'
import { Link } from 'react-router-dom'

const WorkoutSubpage2 = () => {
  return (
    <div className="bg-gray-100 pl-3 pt-3">
      <div>
        <h2 className="text-xs text-gray-400 capitalize">
          {workoutPlans.heading}:
        </h2>
        <ul>
          {workoutPlans.column.map(({ text, url }, index) => {
            return (
              <li
                key={index}
                className="flex items-center capitalize text-xs text-gray-600 pl-1"
              >
                <MdArrowRight className="text-[1.2rem]" />
                <Link to={url} className="flex-1 hover:text-primary py-1.5">
                  {text}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="mb-2 mt-1.5">
        <h2 className="text-xs text-gray-400 capitalize">
          {findYourWorkoutPlan.heading}:
        </h2>
      </div>
      <div>
        <h2 className="text-xs text-gray-400 capitalize">
          {singleWorkouts.heading}:
        </h2>
        <ul>
          {singleWorkouts.column.map(({ text, url }, index) => {
            return (
              <li
                key={index}
                className="flex items-center capitalize text-xs text-gray-600 pl-1"
              >
                <MdArrowRight className="text-[1.2rem]" />
                <Link to={url} className="flex-1 hover:text-primary py-1.5">
                  {text}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
export default WorkoutSubpage2
