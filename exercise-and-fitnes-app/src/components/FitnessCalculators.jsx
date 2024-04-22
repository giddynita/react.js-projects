import { Link } from 'react-router-dom'

const fitnessCalculators = [
  {
    text: 'Body Mass Index (BMI)',
    url: 'body-mass-index-bmi',
  },
  {
    text: 'Body Fat Index',
    url: 'body-fat-index',
  },
  {
    text: 'Calories Burned',
    url: 'calories-burned',
  },
  {
    text: 'Daily Calorie Intake',
    url: 'daily-calorie-intake',
  },
  {
    text: 'One-Rep Max',
    url: 'one-rep-max',
  },
]
const FitnessCalculators = () => {
  return (
    <ul className="absolute top-[141px] left-full w-40 shadow">
      {fitnessCalculators.map(({ text, url }, index) => {
        return (
          <li key={index}>
            <Link
              to={url}
              className="grid items-center h-[35px] pl-3 pr-0.5 border-t border-accent/10 hover:bg-accent/[0.02] hover:text-accent/80"
            >
              {text}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
export default FitnessCalculators
