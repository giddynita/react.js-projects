import { Form, Link, useLoaderData, useNavigation } from 'react-router-dom'
import { classes } from '../data'
import { Banner, FormInput, Heading, SubmitButton } from '../components'
import img1 from '../assets/images/classes-type2.jpg'
import img2 from '../assets/images/about_2.jpg'
import img3 from '../assets/images/article1.png'
import img4 from '../assets/images/classes-type.jpg'
import img5 from '../assets/images/about_1.jpg'
import { FiZoomIn } from 'react-icons/fi'
import { FaLocationPin } from 'react-icons/fa6'
import {
  FaBalanceScale,
  FaGraduationCap,
  FaPhone,
  FaRocket,
} from 'react-icons/fa'
import {
  MdArrowBackIos,
  MdArrowRight,
  MdEmail,
  MdGroups2,
  MdTimelapse,
} from 'react-icons/md'
import { IoPersonSharp } from 'react-icons/io5'
import { comingSoon, formatTime } from '../utils'
import { GoDash } from 'react-icons/go'
import { dataObject } from '../components/WeeklySchedule'

export const action = async () => {
  return null
}

export const loader = ({ params }) => {
  const type = params.type
  const classType = classes.find((classType) => classType.url === type)
  return { classType }
}

const images = [img1, img2, img3, img4, img5]
const ClassType = () => {
  const { classType } = useLoaderData()
  const {
    title,
    type,
    img,
    desc,
    level,
    caloriesBurn,
    duration,
    limit,
    place,
    trainers,
  } = classType
  const mondayPeriod = dataObject.monday.find(({ heading }) => heading == title)

  const tuesdayPeriod = dataObject.tuesday.find(
    ({ heading }) => heading == title
  )
  const wednesdayPeriod = dataObject.wednesday.find(
    ({ heading }) => heading == title
  )
  const thursdayPeriod = dataObject.thursday.find(
    ({ heading }) => heading == title
  )
  const fridayPeriod = dataObject.friday.find(({ heading }) => heading == title)
  const saturdayPeriod = dataObject.saturday.find(
    ({ heading }) => heading == title
  )
  const sundayPeriod = dataObject.sunday.find(({ heading }) => heading == title)
  const navigation = useNavigation()
  return (
    <>
      <Banner
        pageName={title}
        subtitle={`class / ${type}`}
        backgroundImage="bg-[url('./assets/images/hero-carousel-1.jpg')]"
      />
      <div className="width mt-5">
        <Link
          to="/class"
          className="flex items-center hover:text-gray-800 text-gray-500 w-max font-semibold cursor-pointer"
        >
          <MdArrowBackIos className="text-lg" />
          <span className="uppercase text-xs pt-0.5">back</span>
        </Link>
      </div>
      <div className="width pb-10 pt-5 grid md:grid-cols-3 gap-10">
        <section className="md:col-span-2">
          <figure>
            <img src={img} alt={title} className="rounded" loading="lazy" />
          </figure>
          <Heading
            text="about the gym classes"
            margin="mt-6 mb-4"
            size="text-xl font-semibold"
          />
          <p className="text-sm">{desc}</p>
          <div className="grid grid-cols-5 gap-3.5 my-12">
            {images.map((img, index) => {
              return (
                <figure
                  key={index}
                  className="hover:cursor-pointer  overflow-hidden relative fig"
                >
                  <img
                    src={img}
                    alt="about"
                    className=" transition-all duration-300 img h-full"
                  />
                  <div className="black-hover absolute top-0 w-full h-full bg-black/70"></div>
                  <div className="black-hover absolute top-0 w-full h-full transition-all duration-100 flex items-center justify-center">
                    <FiZoomIn className="text-white text-2xl sm:text-3xl md:text-4xl font-bolder zoom origin-center" />
                  </div>
                </figure>
              )
            })}
          </div>
          <Heading
            text="book this class now"
            margin="mb-1"
            size="text-xl font-semibold"
          />
          <p className="text-gray-600">
            Come along and join this great class at the gym
          </p>
          <Form method="POST" className="grid gap-4 my-4 sm:grid-cols-2">
            <div className=" relative">
              <FormInput
                type="text"
                name="name"
                id="name"
                placeholder="Your Name..."
                margin="pl-7"
              />
              <span className="absolute -translate-y-1/2 top-1/2 left-2 text-gray-600">
                <IoPersonSharp className=" w-4 h-4 " />
              </span>
            </div>
            <div className=" relative ">
              <FormInput
                type="text"
                name="membership-number"
                id="membership-number"
                placeholder="Your Membership Number..."
                margin="pl-7"
              />
              <span className="absolute -translate-y-1/2 top-1/2 left-2 text-gray-600">
                <FaGraduationCap className=" w-4 h-4 " />
              </span>
            </div>
            <div className=" relative ">
              <FormInput
                type="email"
                name="email"
                id="email"
                placeholder="Your E-Mail..."
                margin="pl-7"
              />
              <span className="absolute -translate-y-1/2 top-1/2 left-2 text-gray-600">
                <MdEmail className=" w-4 h-4 " />
              </span>
            </div>
            <div className=" relative ">
              <FormInput
                type="tel"
                name="telephone"
                id="telephone"
                placeholder="Your Phone..."
                margin="pl-7"
              />

              <span className="absolute -translate-y-1/2 top-1/2 left-2 text-gray-600">
                <FaPhone className=" w-3.5 h-3.5 " />
              </span>
            </div>
            <div className="w-28" onClick={comingSoon}>
              <SubmitButton
                text="book now"
                texting="booking"
                navigation={navigation}
              />
            </div>
          </Form>
        </section>
        <section>
          <div className="mb-4">
            <Heading
              text="class details"
              margin=" mb-1"
              size="text-md font-semibold"
            />
            <div className="grid grid-cols-5 gap-1.5 items-center border-b border-b-gray-200 py-2.5">
              <p className="flex items-start gap-1.5 text-gray-800 uppercase text-[11px] md:text-xs font-semibold col-span-2 ">
                <FaGraduationCap className="text-[16px] shrink-0" />
                <span className="break-all whitespace-normal">type:</span>
              </p>
              <p className="text-[13px] text-gray-500 col-span-3 capitalize">
                {' '}
                {type}{' '}
              </p>
            </div>
            <div className="grid grid-cols-5 gap-3 items-center border-b border-b-gray-200 py-2.5">
              <p className="flex items-start gap-2.5 text-gray-800 uppercase text-[11px] md:text-xs font-semibold col-span-2">
                <FaRocket className="text-[12px] mt-0.5 shrink-0" />
                <span className="break-all whitespace-normal ">
                  difficulty:
                </span>
              </p>
              <p className="text-[13px] text-gray-500 capitalize col-span-3">
                {' '}
                {level}{' '}
              </p>
            </div>
            <div className="grid grid-cols-5 gap-3 items-center border-b border-b-gray-200 py-2.5">
              <p className="flex items-start gap-1.5 text-gray-800 uppercase text-[11px] md:text-xs font-semibold col-span-2">
                <FaBalanceScale className="text-[16px] shrink-0 " />
                <span className="break-all whitespace-normal ">calories:</span>
              </p>
              <p className="text-[13px] text-gray-500 col-span-3">
                {' '}
                {caloriesBurn}{' '}
              </p>
            </div>
            <div className="grid grid-cols-5 gap-3 items-center border-b border-b-gray-200 py-2.5">
              <p className="flex  items-start gap-1.5 text-gray-800 uppercase text-[11px] md:text-xs font-semibold col-span-2">
                <MdTimelapse className="text-[16px] shrink-0" />
                <span className="break-all whitespace-normal">duration:</span>
              </p>
              <p className="text-[13px] text-gray-500 col-span-3">
                {' '}
                {duration}{' '}
              </p>
            </div>
            <div className="grid grid-cols-5 gap-3 items-center border-b border-b-gray-200 py-2.5">
              <p className="flex items-start gap-2.5 text-gray-800 uppercase text-[11px] md:text-xs font-semibold col-span-2">
                <FaLocationPin className="text-[12px] shrink-0 mt-[1px]" />
                <span className="break-all whitespace-normal">place:</span>
              </p>
              <p className="text-[13px] text-gray-500 col-span-3 capitalize">
                {' '}
                {place}
              </p>
            </div>
            <div className="grid grid-cols-5 gap-3 items-center  py-2.5">
              <p className="flex items-start gap-1.5 text-gray-800 uppercase text-[11px] md:text-xs font-semibold col-span-2">
                <MdGroups2 className="text-[16px] shrink-0" />
                <span className="break-all whitespace-normal">limit:</span>
              </p>
              <p className="text-[13px] text-gray-500 col-span-3"> {limit} </p>
            </div>
          </div>
          <div className="sm:grid sm:grid-cols-2 items-start gap-x-10 md:grid-cols-1">
            <div className="mb-4">
              <Heading
                text="class schedule"
                margin=" mb-1"
                size="text-md font-semibold"
              />
              <div className="schedule">
                {mondayPeriod && (
                  <div className="flex items-center gap-x-2 flex-wrap justify-between border-b border-b-gray-300 py-2">
                    <div className="flex items-center text-gray-700 text-[13px]">
                      <MdArrowRight className="w-5 h-5 flex -ml-1.5  " />
                      <p className="capitalize">monday</p>
                    </div>
                    <div className="flex items-center ml-auto gap-0.5 text-xs font-semibold text-primary">
                      <time dateTime="">
                        {formatTime(mondayPeriod.startTime)}
                      </time>{' '}
                      <GoDash />
                      <time dateTime="">
                        {formatTime(mondayPeriod.endTime)}
                      </time>
                    </div>
                  </div>
                )}
                {tuesdayPeriod && (
                  <div className="flex items-center gap-x-2 flex-wrap justify-between border-b border-b-gray-300 py-2">
                    <div className="flex items-center text-gray-700 text-[13px]">
                      <MdArrowRight className="w-5 h-5 flex -ml-1.5  " />
                      <p className="capitalize">tuesday</p>
                    </div>
                    <div className="flex items-center gap-0.5 text-xs font-semibold ml-auto text-primary">
                      <time dateTime="">
                        {formatTime(tuesdayPeriod.startTime)}
                      </time>{' '}
                      <GoDash />
                      <time dateTime="">
                        {formatTime(tuesdayPeriod.endTime)}
                      </time>
                    </div>
                  </div>
                )}
                {wednesdayPeriod && (
                  <div className="flex items-center gap-x-2 flex-wrap justify-between border-b border-b-gray-300 py-2">
                    <div className="flex items-center text-gray-700 text-[13px]">
                      <MdArrowRight className="w-5 h-5 flex -ml-1.5  " />
                      <p className="capitalize">wednesday</p>
                    </div>
                    <div className="flex items-center gap-0.5 ml-auto text-xs font-semibold text-primary">
                      <time dateTime="">
                        {formatTime(wednesdayPeriod.startTime)}
                      </time>{' '}
                      <GoDash />
                      <time dateTime="">
                        {formatTime(wednesdayPeriod.endTime)}
                      </time>
                    </div>
                  </div>
                )}
                {thursdayPeriod && (
                  <div className="flex items-center gap-x-2 flex-wrap justify-between border-b border-b-gray-300 py-2">
                    <div className="flex items-center text-gray-700 text-[13px]">
                      <MdArrowRight className="w-5 h-5 flex -ml-1.5  " />
                      <p className="capitalize">thursday</p>
                    </div>
                    <div className="flex items-center gap-0.5 text-xs font-semibold ml-auto text-primary">
                      <time dateTime="">
                        {formatTime(thursdayPeriod.startTime)}
                      </time>{' '}
                      <GoDash />
                      <time dateTime="">
                        {formatTime(thursdayPeriod.endTime)}
                      </time>
                    </div>
                  </div>
                )}
                {fridayPeriod && (
                  <div className="flex items-center gap-x-2 flex-wrap justify-between border-b border-b-gray-300 py-2">
                    <div className="flex items-center text-gray-700 text-[13px]">
                      <MdArrowRight className="w-5 h-5 flex -ml-1.5  " />
                      <p className="capitalize">friday</p>
                    </div>
                    <div className="flex items-center gap-0.5 text-xs font-semibold ml-auto text-primary">
                      <time dateTime="">
                        {formatTime(fridayPeriod.startTime)}
                      </time>{' '}
                      <GoDash />
                      <time dateTime="">
                        {formatTime(fridayPeriod.endTime)}
                      </time>
                    </div>
                  </div>
                )}
                {saturdayPeriod && (
                  <div className="flex items-center gap-x-2 flex-wrap justify-between border-b border-b-gray-300 py-2">
                    <div className="flex items-center text-gray-700 text-[13px]">
                      <MdArrowRight className="w-5 h-5 flex -ml-1.5  " />
                      <p className="capitalize">saturday</p>
                    </div>
                    <div className="flex items-center gap-0.5 text-xs font-semibold ml-auto text-primary">
                      <time dateTime="">
                        {formatTime(saturdayPeriod.startTime)}
                      </time>{' '}
                      <GoDash />
                      <time dateTime="">
                        {formatTime(saturdayPeriod.endTime)}
                      </time>
                    </div>
                  </div>
                )}
                {sundayPeriod && (
                  <div className="flex items-center gap-x-2 flex-wrap justify-between border-b border-b-gray-300 py-2">
                    <div className="flex items-center text-gray-700 text-[13px]">
                      <MdArrowRight className="w-5 h-5 flex -ml-1.5  " />
                      <p className="capitalize">sunday</p>
                    </div>
                    <div className="flex items-center gap-0.5 text-xs font-semibold ml-auto text-primary">
                      <time dateTime="">
                        {formatTime(sundayPeriod.startTime)}
                      </time>{' '}
                      <GoDash />
                      <time dateTime="">
                        {formatTime(sundayPeriod.endTime)}
                      </time>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div>
              <Heading
                text="class trainers"
                margin=" mb-1"
                size="text-md font-semibold"
              />
              {trainers.map(({ name, position, image }, index) => {
                return (
                  <div
                    key={index}
                    className="flex items-center gap-2.5 py-2 border-b border-b-gray-300 last:border-b-0"
                  >
                    <figure>
                      <img
                        src={image}
                        alt={name}
                        className="h-20 sm:h-12"
                        loading="lazy"
                      />
                    </figure>
                    <div className="capitalize text-[13px] text-gray-800">
                      <p className="text-primary -mb-0.5">{name}</p>
                      <p>{position}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
export default ClassType
