import buildMuscleMale from '../assets/images/workout-plan-male.png'
import loseFatMale from '../assets/images/lose-fat.png'
import transformMale from '../assets/images/transform.png'

const plans = [
  {
    image: buildMuscleMale,
    type: 'build muscle',
  },
  {
    image: loseFatMale,
    type: 'lose fat',
  },
  {
    image: transformMale,
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
                loading="lazy"
              />
              <button
                type="button"
                className="absolute bottom-4 left-1/2 -translate-x-1/2 w-32 py-2 bg-primary text-white uppercase text-xs hover:bg-secondary rounded-sm"
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
