import {
  Carousel,
  FirstHomeSection,
  SectionTitle,
  WeeklySchedule,
  WorkoutRoutine,
  CalculatorOptions,
  ReviewHomePage,
  CaloriesCalculator,
  Heading,
  SubmitButton,
  FormInput,
} from '../components'
import { useDispatch, useSelector } from 'react-redux'
import { useRef } from 'react'
import { handleDetails } from '../features/caloric_calculator/caloricCalculatorSlice'
import { Form, Link, useNavigation } from 'react-router-dom'
import { IoIosArrowDroprightCircle } from 'react-icons/io'

const Home = () => {
  const { caloriesIntake, carbsProtein, fats, details, showDetails } =
    useSelector((state) => state.caloricParametersState)
  const caloriesIntakeDetailsRef = useRef()
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const hideCaloriesIntakeDetails = (event, details) => {
    const caloriesIntakeDetails = caloriesIntakeDetailsRef.current
    const { left, right, bottom, top } =
      caloriesIntakeDetails.getBoundingClientRect()
    const { clientX, clientY } = event

    if (
      clientX < left ||
      clientX > right ||
      clientY > bottom - 1 ||
      clientY < top
    ) {
      dispatch(handleDetails({ show: details, showHide: false }))
    }
  }
  const showHideBg = showDetails ? 'h-full' : 'hidden'
  const showHideDetails =
    showHideBg == 'hidden' ? 'scale-75 opacity-0 invisible' : 'scale-100'
  return (
    <div className="relative">
      <Carousel />
      <section className="pt-10 width">
        <SectionTitle title="forgefit theme demonstration" />
        <p className=" py-4 text-center text-lg text-accent/70">
          Please take your time discovering the tons of features packed with the
          theme. <br /> Every element was carefully designed to focus on
          content, but with style. Enjoy it!
        </p>
        <FirstHomeSection />
      </section>
      <section className="text-center bg-[url('./assets/images/hero-carousel-44.jpg')] bg-center bg-cover py-14 mt-12">
        <h3 className="width font-bold text-white uppercase text-lg sm:text-2xl md:text-3xl leading-tight">
          get better results & a ton of fun
        </h3>
        <p className="width uppercase text-sm sm:text-lg text-gray-100 mb-5 mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui
          mauris.
        </p>
        <Link to="/class">
          <button
            type="button"
            className="bg-primary uppercase text-white py-2 px-4 rounded flex items-center mx-auto gap-1 hover:bg-secondary"
          >
            book now{' '}
            <IoIosArrowDroprightCircle className="text-white w-5 h-5" />
          </button>
        </Link>
      </section>
      <section className="pt-10 width">
        <SectionTitle title="weekly classes schedule" />
        <p className=" py-4 text-center text-lg text-accent/70">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui
          mauris. <br /> Vivamus hendrerit arcu sed erat molestie vehicula. Sed
          auctor neque eu tellus rhoncus ut eleifend.
        </p>
        <WeeklySchedule />
      </section>
      <section className="pt-10 mt-10 border-t">
        <SectionTitle title="workout routines" />
        <p className="py-4 text-center text-lg text-accent/70 width">
          Designed by the world's best industry experts to help you get the best
          possible results. <br /> Find a comprehensive fitness plan, for free.
          Ready... Set... Sweat!
        </p>
        <WorkoutRoutine />
      </section>
      <section className="width pt-10">
        <SectionTitle title="fitness calculators" />
        <p className=" py-4 text-center text-lg text-accent/70">
          Give your visitors a chance to easily calculate important values about
          their health and activity. <br /> They will love this feature. They
          will want to come back because of this feature!
        </p>
        <div className="sm:flex mt-3 relative">
          <CaloriesCalculator />
          <div
            className={`absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[90%] md:w-92 bg-white text-center p-6 rounded-md transit ${showHideDetails} z-50 `}
            ref={caloriesIntakeDetailsRef}
          >
            {details == 'view details' && (
              <div className="transit">
                <Heading
                  text="Target Daily Caloric Intake"
                  margin=""
                  size="text-xs"
                />
                <p className="text-6xl font-extrabold mb-2.5 mt-0.5">
                  {caloriesIntake}
                </p>
                <div className="border-t">
                  <p className="text-xs flex justify-between items-center border-b pb-1 pt-1.5">
                    Carbs <span>{carbsProtein} g/day</span>
                  </p>
                  <p className="text-xs flex justify-between items-center border-b pb-1 pt-1.5">
                    Proteins <span>{carbsProtein} g/day</span>
                  </p>
                  <p className="text-xs flex justify-between items-center border-b pb-1 pt-1.5">
                    Fats <span>{fats} g/day</span>
                  </p>
                </div>
                <p className="text-xs mt-4 text-accent/80">
                  These calculations are based on averages.
                </p>
              </div>
            )}
            {details == 'save result' && (
              <>
                <p className="text-sm text-accent/80 font-semibold">
                  Do you want to receive the results in your inbox? <br />
                  <span className="text-[12px] text-accent/70 font-normal">
                    Just type your e-mail...
                  </span>
                </p>
                <Form className="flex gap-1 items-center justify-center my-1">
                  <FormInput
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    margin="my-3"
                  />
                  <div className=" w-20">
                    <SubmitButton
                      text="submit"
                      texting="submitting"
                      navigation={navigation}
                      height="h-[32px]"
                    />
                  </div>
                </Form>
                <p className="text-[11px] text-accent/70">
                  If you don't receive the email within 2 min, please check your
                  spam folder.
                </p>
              </>
            )}
          </div>
        </div>
        <CalculatorOptions />
      </section>

      <ReviewHomePage />
      <div
        className={`fixed bg-black/60 top-0 h-full w-full origin-center  transit flex items-center justify-center text-accent/70 z-40 ${showHideBg}`}
        onClick={(e) => {
          hideCaloriesIntakeDetails(e, details)
        }}
      ></div>
    </div>
  )
}
export default Home
