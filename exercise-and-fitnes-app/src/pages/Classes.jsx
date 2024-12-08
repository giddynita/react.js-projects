import { Link } from 'react-router-dom'
import {
  ClassesSelect,
  ClassesTypes,
  SectionTitle,
  WeeklySchedule,
} from '../components'
import { IoIosArrowDroprightCircle } from 'react-icons/io'
import { MdStar } from 'react-icons/md'

const types = [
  'show all',
  'cardio',
  'dancing',
  'endurance',
  'muscle gain',
  'rehabilitation',
  'relaxation',
  'strength',
  'tone up',
  'weight loss',
]
/* const typesV2 = [
  'cardio',
  'dancing',
  'endurance',
  'muscle gain',
  'rehabilitation',
  'relaxation',
  'strength',
  'tone up',
  'weight loss',
] */
const difficulty = [
  'show all',
  'advanced level',
  'intermediate level',
  'beginner level',
]

const Classes = () => {
  return (
    <>
      <section className="w-full bg-black bg-[url('./assets/images/classes-slider-bg.jpg')] bg-top  py-20 sm:py-0 sm:h-[62vw] md:h-[49vw] lg:h-[500px] border-y-[4px] border-y-primary relative text-gray-300  text-center flex flex-col justify-center">
        <h4 className=" text-sm uppercase sm:text-md md:text-lg">
          extreme fitness
        </h4>
        <h2 className="text-3xl font-bold uppercase sm:text-5xl md:text-6xl">
          gym classes
        </h2>
        <p className="-mt-1 sm:mt-0 italic sm:text-xl md:text-2xl">
          Party Yourself into shape!
        </p>
        <div className="flex text-white text-xs justify-center mt-1 sm:mt-2 md:mt-3">
          <MdStar />
          <MdStar />
          <MdStar />
          <MdStar />
          <MdStar />
        </div>
        {/* <div className="width flex justify-center uppercase text-[6px] text-white gap-2 font-semibold">
          {typesV2.map((type, index) => {
            return <p>{type}</p>
          })}
        </div> */}
        <div className="mt-8 hidden md:block">
          <a
            href="#classes"
            className="bg-primary text-white px-5 uppercase rounded py-2.5 mr-3 hover:bg-secondary"
          >
            view classes
          </a>
          <a
            href="#schedule"
            className="bg-primary text-white px-5 uppercase rounded py-2.5 hover:bg-secondary "
          >
            view schedule
          </a>
        </div>
      </section>
      <section className="flex flex-col gap-3 sm:flex-row justify-center sm:gap-8 p-6 border-b-gray-300 border-b bg-gray-200">
        <div className="flex items-center gap-2 justify-center">
          <p className="uppercase text-xs text-gray-700">type:</p>
          <ClassesSelect name="type" options={types} />
        </div>
        <div className="flex items-center gap-2 justify-center">
          <p className="uppercase text-xs text-gray-700">difficulty:</p>
          <ClassesSelect name="difficulty" options={difficulty} />
        </div>
      </section>
      <section className=" width py-10" id="classes">
        <ClassesTypes />
      </section>
      <section className="text-center bg-[url('./assets/images/hero-carousel-44.jpg')] bg-center bg-cover py-14">
        <h3 className="width font-bold text-white uppercase text-2xl md:text-3xl ">
          get better results & a ton of fun
        </h3>
        <p className="width uppercase text-lg text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui
          mauris.
        </p>
        <button
          type="button"
          className="bg-primary uppercase text-white py-2 px-4 rounded mt-5 flex items-center mx-auto gap-1 hover:bg-secondary"
        >
          book now <IoIosArrowDroprightCircle className="text-white w-5 h-5" />
        </button>
      </section>
      <section className="py-10 width" id="schedule">
        <SectionTitle title="weekly classes schedule" />
        <p className=" py-4 text-center text-lg text-accent/70">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui
          mauris. <br /> Vivamus hendrerit arcu sed erat molestie vehicula. Sed
          auctor neque eu tellus rhoncus ut eleifend.
        </p>
        <WeeklySchedule />
      </section>
      <p className="width text-sm text-center text-gray-500 pb-12">
        Lorem ipsum dolor sit amet,{' '}
        <Link className="text-primary  cursor-pointer hover:text-secondary">
          consectetur
        </Link>{' '}
        adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim{' '}
        <Link className="text-primary  cursor-pointer hover:text-secondary">
          veniam quis
        </Link>{' '}
        nostrud exercitation.
      </p>
    </>
  )
}
export default Classes
