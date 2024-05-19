import buildMuscleFemale from '../assets/images/workout-plan-female.png'
import loseFatFemale from '../assets/images/lose-fat-female.png'
import transformFemale from '../assets/images/transform-female.png'

const plans = [
  {
    image: buildMuscleFemale,
    type: 'build muscle',
  },
  {
    image: loseFatFemale,
    type: 'lose fat',
  },
  {
    image: transformFemale,
    type: 'transform',
  },
]

const WorkoutPlanMale = () => {
  return (
    <ul className="flex justify-center gap-x-1">
      {plans.map(({ image, type }, index) => {
        return (
          <>
            <li key={index} className="relative">
              <img
                src={image}
                alt={type}
                className="w-[150px] mb-12 img cursor-pointer"
              />
              <button
                type="button"
                className="absolute  bottom-4 left-1/2 -translate-x-1/2 w-32 py-2 bg-primary text-white uppercase text-xs hover:bg-secondary rounded-sm"
              >
                {type}
              </button>
            </li>
          </>
        )
      })}
    </ul>
  )
}
export default WorkoutPlanMale
