import { Link } from 'react-router-dom'
import { MdArrowRight } from 'react-icons/md'
import male from '../assets/images/workout-plan-male.png'
import female from '../assets/images/workout-plan-female.png'
import { useDispatch, useSelector } from 'react-redux'
import WorkoutPlanMale from './WorkoutPlanMale'
import WorkoutPlanFemale from './WorkoutPlanFemale'
import { handleWorkoutPlan } from '../features/navbar/navbarSlice'
import Heading from './Heading'

export const workoutPlans = {
  heading: 'workout plans',
  column: [
    { text: 'power bodyBuilding', url: 'power-bodybuilding' },
    { text: 'iron everyday', url: 'iron-everyday' },
    { text: 'blueprint to size', url: 'blueprint-to-size' },
    { text: 'stronger than yesterday', url: 'stronger-than-yesterday' },
    { text: '3 weeks 2 size', url: '3-weeks-2-size' },
    { text: 'lean body', url: 'lean-body' },
    { text: 'start here your new year', url: 'start-here-your-new-year' },
  ],
}
export const findYourWorkoutPlan = {
  heading: 'find your workout plan',
  column: [
    {
      image: female,
      type: 'female',
    },
    {
      image: male,
      type: 'male',
    },
  ],
}
export const singleWorkouts = {
  heading: 'single workouts',
  column: [
    { text: 'blast your traps', url: 'blast-your-traps' },
    { text: "starter's guide workout", url: "starter's-guide-workout" },
    { text: 'shoulders & arms workout', url: 'shoulders-arms-workout' },
    { text: 'core build-up workout', url: 'core-build-up-workout' },
    { text: 'holiday belly blaster', url: 'holiday-belly-blaster' },
    { text: '4 weeks massive muscle', url: '4-weeks-massive-muscle' },
    { text: 'core build-up muscle', url: 'core-build-up-muscle' },
  ],
}

const WorkoutsSubPage = () => {
  const sex = useSelector((state) => state.navbarState.workoutPlan)
  const dispatch = useDispatch()
  const handleSpecificWorkout = (sex) => {
    dispatch(handleWorkoutPlan({ sex }))
  }
  return (
    <div className="borderTop w-full p-6 grid grid-cols-4 capitalize">
      <div className="mr-6">
        <Heading
          text={workoutPlans.heading}
          margin="pb-4"
          size="text-sm font-semibold"
        />
        <ul>
          {workoutPlans.column.map(({ text, url }, index) => {
            return (
              <li key={index}>
                <Link
                  to={url}
                  className=" flex items-start py-1.5 hover:bg-accent/[0.02] hover:text-accent/80"
                >
                  <MdArrowRight className="text-[1rem] shrink-0" />
                  <span>{text}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="text-center col-span-2 border-r-[1px] border-l-[1px] border-r-black/20 border-l-black/20">
        <Heading
          text={findYourWorkoutPlan.heading}
          margin="pb-4"
          size="text-sm font-semibold"
        />
        {sex ? (
          ''
        ) : (
          <ul className="flex justify-center gap-x-1">
            {findYourWorkoutPlan.column.map(({ image, type }, index) => {
              return (
                <>
                  <li key={index + 1} className="relative">
                    <img
                      src={image}
                      alt={type}
                      className="w-[150px] mb-12 img cursor-pointer"
                      onClick={() => {
                        handleSpecificWorkout(type)
                      }}
                      loading="lazy"
                    />
                    <button
                      type="button"
                      className="absolute bottom-4 left-1/2 -translate-x-1/2 w-32 py-2  bg-primary text-white uppercase hover:bg-secondary rounded-sm"
                      onClick={() => {
                        handleSpecificWorkout(type)
                      }}
                    >
                      {type}
                    </button>
                  </li>
                </>
              )
            })}
          </ul>
        )}
        {sex === 'male' && <WorkoutPlanMale />}
        {sex === 'female' && <WorkoutPlanFemale />}
      </div>
      <div className="ml-6">
        <Heading
          text={singleWorkouts.heading}
          margin="mb-4"
          size="text-sm font-semibold"
        />
        <ul>
          {singleWorkouts.column.map(({ text, url }, index) => {
            return (
              <li key={index + 2}>
                <Link
                  to={url}
                  className=" flex items-start py-1.5 hover:bg-accent/[0.02] hover:text-accent/80"
                >
                  <MdArrowRight className="text-[1rem] shrink-0" />
                  <span>{text}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
export default WorkoutsSubPage
