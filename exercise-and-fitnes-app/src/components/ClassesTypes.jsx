import { Link } from 'react-router-dom'
import { MdTimelapse } from 'react-icons/md'
import { FaBurn, FaExclamationTriangle } from 'react-icons/fa'
import { classes } from '../data'
import { useDispatch, useSelector } from 'react-redux'
import {
  handleClassDifficultyFilter,
  handleClassTypeFilter,
} from '../features/classes/classesSlice'

const ClassesTypes = () => {
  const { type, difficulty } = useSelector((state) => {
    return state.classesState
  })
  const typeFiltered =
    type == 'show all'
      ? classes
      : classes.filter((classType) => classType.type.includes(type))
  const typeAndDifficultyFiltered =
    difficulty == 'show all'
      ? typeFiltered
      : typeFiltered.filter(
          (classDifficulty) => classDifficulty.level == difficulty
        )
  const handleReload = () => {
    window.location.reload()
  }
  const dispatch = useDispatch()
  if (typeAndDifficultyFiltered.length < 1) {
    return (
      <div className="width border border-gray-200 py-10 rounded-lg text-gray-800 flex flex-col items-center justify-center">
        <FaExclamationTriangle className=" text-5xl mb-3" />
        <p className="uppercase font-semibold text-xl mb-0.5">
          no results found
        </p>
        <p className="text-sm mb-6 text-center">
          No results were found matching your search criteria. <br /> Please
          specify a different set of filters.
        </p>
        <button
          type="button"
          className="bg-primary text-white text-xs py-2.5 w-28 rounded uppercase hover:bg-secondary"
          onClick={handleReload}
        >
          <Link to="/class">reset search</Link>
        </button>
      </div>
    )
  }
  return (
    <div className="mx-auto sm:grid-cols-2 md:grid-cols-3 grid gap-5 ">
      {typeAndDifficultyFiltered.map(
        ({ title, level, desc, duration, caloriesBurn, url, img }, index) => {
          return (
            <article key={index} className="rounded-lg">
              <figure className="w-full ">
                <img
                  src={img}
                  alt="classes"
                  className="w-full rounded-t-lg"
                  loading="lazy"
                />
              </figure>
              <div className="p-6 text-center flex flex-col gap-3.5 border border-t-0 border-gray-300 rounded-b-lg">
                <div className="leading-tight">
                  <Link to={url}>
                    <h3 className="uppercase text-sm font-semibold text-gray-600 cursor-pointer">
                      {title}
                    </h3>
                  </Link>
                  <p className="text-primary capitalize text-sm">{level}</p>
                </div>
                <p className="text-sm text-gray-500 overflow-hidden line-clamp-3 text-ellipsis">
                  {desc}
                </p>
                <div className="flex items-center justify-center gap-3">
                  <div className="flex items-start text-gray-400 text-[13.5px] gap-0.5">
                    <MdTimelapse className="mt-[3.56px]" />
                    <p>{duration} </p>
                  </div>
                  <div className="flex items-start text-gray-400 text-[13.5px] gap-0.5">
                    <FaBurn className="mt-[3px]" />
                    <p>{caloriesBurn} </p>
                  </div>
                </div>
                <Link to={url}>
                  <button className="bg-primary text-white uppercase text-xs p-3 rounded hover:bg-secondary">
                    view details
                  </button>
                </Link>
              </div>
            </article>
          )
        }
      )}
    </div>
  )
}
export default ClassesTypes
