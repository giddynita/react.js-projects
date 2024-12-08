import { Form } from 'react-router-dom'
import FormInput from './FormInput'
import FormSelect from './FormSelect'
import SubmitButton from './SubmitButton'
import Heading from './Heading'
import {
  handleDetails,
  handleParameters,
} from '../features/caloric_calculator/caloricCalculatorSlice'
import { useDispatch, useSelector } from 'react-redux'
import { MdEmail, MdInfo } from 'react-icons/md'
import { toast } from 'react-toastify'

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData()
    const data = Object.fromEntries(formData)
    const { gender, goal, activityLevel, age, weight, height } = data
    if (
      gender == 'gender' ||
      goal == 'goal' ||
      activityLevel == 'activity level' ||
      !age ||
      !weight ||
      !height
    ) {
      toast.error('Incomplete information detected')
      return null
    }

    try {
      store.dispatch(handleParameters({ data }))
    } catch (error) {
      console.log(error)
    }

    return null
  }
const genderOptions = ['Male', 'Female']
const goalOptions = ['Fat Loss', 'Maintenance', 'Muscle Gain']
const activityLevelOptions = [
  'Lightly active (moderate exercise but sedentary job)',
  'Moderately active (intense exercise but sedentary job)',
  'Very active (moderate exercise but active job)',
  'Extra active ( intense exercise but active job)',
]
const resultAction = [
  {
    action: 'view details',
    icon: <MdInfo />,
  },
  { action: 'save result', icon: <MdEmail /> },
]

const CaloriesCalculator = () => {
  const dispatch = useDispatch()
  const selectResultAction = (action) => {
    dispatch(handleDetails({ show: action, showHide: true }))
  }
  const { caloriesIntake } = useSelector(
    (state) => state.caloricParametersState
  )

  return (
    <>
      <Form
        method="POST"
        className="grid grid-cols-2 gap-3 bg-accent/5 p-6 rounded-t-md sm:rounded-l-md sm:rounded-tr-none place-center"
      >
        <FormInput
          type="number"
          name="age"
          id="age"
          placeholder="Age"
          label="Age"
          labelSize="text-xs"
          required="*"
        />
        <FormSelect
          name="gender"
          title="gender"
          options={genderOptions}
          label="Gender"
          labelSize="text-xs"
          required="*"
        />
        <FormInput
          type="number"
          name="weight"
          id="weight"
          placeholder="Weight (kgs)"
          label="Weight (kgs)"
          labelSize="text-xs"
          required="*"
        />
        <FormInput
          type="number"
          name="height"
          id="height"
          placeholder="Height (cm)"
          label="Height (cm)"
          labelSize="text-xs"
          required="*"
        />
        <FormSelect
          name="goal"
          title="goal"
          options={goalOptions}
          label="Goal"
          labelSize="text-xs"
          required="*"
        />
        <FormSelect
          name="activityLevel"
          title="activity level"
          options={activityLevelOptions}
          label="Activity Level"
          labelSize="text-xs"
          required="*"
        />
        <div className="w-28">
          <SubmitButton text="calculate" />
        </div>
      </Form>
      <div className="flex flex-col items-center justify-center  bg-accent/10 p-6 text-center rounded-b-md sm:rounded-r-md sm:rounded-b-none sm:w-1/3 w-full text-accent/70">
        <Heading
          text="Target Daily Caloric Intake"
          margin="mb-1"
          size="text-xs"
        />
        <p className="text-6xl font-extrabold my-1.5">
          {caloriesIntake || '?'}
        </p>
        <p className="text-xs text-accent/80">
          These calculations are based on averages.
        </p>
        {caloriesIntake && (
          <div className="flex flex-wrap gap-x-2.5 gap-y-1 items-center justify-center mt-2">
            {resultAction.map(({ action, icon }, index) => {
              return (
                <button
                  key={index}
                  type="button"
                  className="flex items-center uppercase text-[10px] gap-0.5 hover:text-primary cursor-pointer"
                  onClick={() => selectResultAction(action)}
                >
                  <span className="text-xs">{icon}</span> {action}
                </button>
              )
            })}
          </div>
        )}
      </div>
    </>
  )
}
export default CaloriesCalculator
