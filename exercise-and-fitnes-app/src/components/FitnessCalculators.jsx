import { NavLink } from 'react-router-dom'

const fitnessCalculators = [
  'Body Mass Index (BMI)',
  'Body Fat Index',
  'Calories Burned',
  'Daily Calorie Intake',
  'One-Rep Max',
]
const FitnessCalculators = () => {
  return (
    <ul className="absolute top-[141px] text-xs left-full w-40 shadow">
      {fitnessCalculators.map((fitnessCalculator, index) => {
        return (
          <li key={index}>
            <NavLink className="grid items-center h-[35px] pl-3 pr-0.5 border-t border-black/10 hover:bg-black/[0.02] hover:text-black/70">
              {fitnessCalculator}
            </NavLink>
          </li>
        )
      })}
    </ul>
  )
}
export default FitnessCalculators
