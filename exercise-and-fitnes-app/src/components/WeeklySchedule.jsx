import { FaHeartbeat } from 'react-icons/fa'
import { Heading } from '../components'
import { useState } from 'react'
import { formatTime } from '../utils'
import { GoDash } from 'react-icons/go'
export const dataObject = {
  monday: [
    {
      icon: <FaHeartbeat />,
      startTime: '8:00',
      endTime: '9:30',
      heading: 'yoga',
      trainer: 'virginia f. bryant',
    },
    {
      icon: <FaHeartbeat />,
      startTime: '11:00',
      endTime: '12:00',
      heading: 'aqua aerobics',
      trainer: 'barbara s. romero',
    },
    {
      icon: <FaHeartbeat />,
      startTime: '14:00',
      endTime: '15:00',
      heading: 'zumba',
      trainer: 'stephen j. kennedy',
    },
    {
      icon: <FaHeartbeat />,
      startTime: '15:15',
      endTime: '15:45',
      heading: 'cardio circuit',
      trainer: 'wesley d. richards',
    },
    {
      icon: <FaHeartbeat />,
      startTime: '17:00',
      endTime: '18:00',
      heading: 'pilates',
      trainer: 'edward b. lewis',
    },
    {
      icon: <FaHeartbeat />,
      startTime: '18:00',
      endTime: '19:00',
      heading: 'crossfit',
      trainer: 'erick s. duncan',
    },
    {
      icon: <FaHeartbeat />,
      startTime: '19:00',
      endTime: '20:45',
      heading: 'body building',
      trainer: 'erick s. duncan',
    },
    {
      icon: <FaHeartbeat />,
      startTime: '19:00',
      endTime: '20:00',
      heading: 'break-thru fitness',
      trainer: 'virginia f. bryant',
    },
  ],
  tuesday: [
    {
      icon: <FaHeartbeat />,
      startTime: '10:30',
      endTime: '10:45',
      heading: 'cardio circuit',
      trainer: 'wesley d. richards',
    },
    {
      icon: <FaHeartbeat />,
      startTime: '10:30',
      endTime: '11:00',
      heading: 'mind & body fitness',
      trainer: 'ashley t. white',
    },
    {
      icon: <FaHeartbeat />,
      startTime: '16:00',
      endTime: '17:00',
      heading: 'body building',
      trainer: 'edward b. lewis',
    },
    {
      icon: <FaHeartbeat />,
      startTime: '16:00',
      endTime: '17:00',
      heading: 'break-thru fitness',
      trainer: 'whitney k. fowler',
    },
    {
      icon: <FaHeartbeat />,
      startTime: '18:00',
      endTime: '19:00',
      heading: 'pilates',
      trainer: 'barbara s. romero',
    },
    {
      icon: <FaHeartbeat />,
      startTime: '18:00',
      endTime: '19:00',
      heading: 'crossfit',
      trainer: 'erick s. duncan',
    },
    {
      icon: <FaHeartbeat />,
      startTime: '20:30',
      endTime: '21:30',
      heading: 'yoga',
      trainer: 'meghan p. ingram',
    },
    {
      icon: <FaHeartbeat />,
      startTime: '22:00',
      endTime: '23:00',
      heading: 'aqua aerobics',
      trainer: 'willie d. collins',
    },
  ],
  wednesday: [
    {
      icon: <FaHeartbeat />,
      startTime: '11:30',
      endTime: '12:30',
      heading: 'mind & body fitness',
      trainer: 'alicia k. wright',
    },
    {
      icon: <FaHeartbeat />,
      startTime: '12:00',
      endTime: '13:00',
      heading: 'body building',
      trainer: 'erick s. duncan',
    },
    {
      icon: <FaHeartbeat />,
      startTime: '12:00',
      endTime: '13:00',
      heading: 'break-thru fitness',
      trainer: 'whitney k. fowler',
    },
    {
      icon: <FaHeartbeat />,
      startTime: '13:15',
      endTime: '13:30',
      heading: 'cardio circuit',
      trainer: 'stephen j. kennedy',
    },
    {
      icon: <FaHeartbeat />,
      startTime: '14:00',
      endTime: '15:00',
      heading: 'yoga',
      trainer: 'ashley t. white',
    },
    {
      icon: <FaHeartbeat />,
      startTime: '18:00',
      endTime: '19:00',
      heading: 'crossfit',
      trainer: 'edward b. lewis',
    },
    {
      icon: <FaHeartbeat />,
      startTime: '08:00',
      endTime: '09:00',
      heading: 'cardio circuit',
      trainer: 'willie d. collins',
    },
    {
      icon: <FaHeartbeat />,
      startTime: '08:30',
      endTime: '09:30',
      heading: 'aqua aerobics',
      trainer: 'alicia k. wright',
    },
  ],
  thursday: [
    {
      icon: <FaHeartbeat />,
      startTime: '10:30',
      endTime: '11:30',
      heading: 'zumba',
      trainer: 'alicia k. wright',
    },
    {
      icon: <FaHeartbeat />,
      startTime: '14:00',
      endTime: '15:00',
      heading: 'yoga',
      trainer: 'willie d. collins',
    },
    {
      icon: <FaHeartbeat />,
      startTime: '14:30',
      endTime: '14:45',
      heading: 'cardio circuit',
      trainer: 'virginia f. bryant',
    },
    {
      icon: <FaHeartbeat />,
      startTime: '17:30',
      endTime: '18:30',
      heading: 'body building',
      trainer: 'edward b. lewis',
    },
    {
      icon: <FaHeartbeat />,
      startTime: '17:30',
      endTime: '18:30',
      heading: 'break-thru fitness',
      trainer: 'virginia f. bryant',
    },
    {
      icon: <FaHeartbeat />,
      startTime: '18:00',
      endTime: '19:00',
      heading: 'pilates',
      trainer: 'wesley d. richards',
    },
    {
      icon: <FaHeartbeat />,
      startTime: '18:00',
      endTime: '19:00',
      heading: 'crossfit',
      trainer: 'dennis y. allen',
    },
    {
      icon: <FaHeartbeat />,
      startTime: '19:00',
      endTime: '20:00',
      heading: 'yoga',
      trainer: 'barbara s. romero',
    },
  ],
  friday: [
    {
      icon: <FaHeartbeat />,
      startTime: '12:00',
      endTime: '13:00',
      heading: 'aqua aerobis',
      trainer: 'whitney k. fowler',
    },
    {
      icon: <FaHeartbeat />,
      startTime: '14:00',
      endTime: '15:00',
      heading: 'yoga',
      trainer: 'ashley t. white',
    },
    {
      icon: <FaHeartbeat />,
      startTime: '16:00',
      endTime: '17:00',
      heading: 'body building',
      trainer: 'eric s. duncan',
    },
    {
      icon: <FaHeartbeat />,
      startTime: '16:00',
      endTime: '17:00',
      heading: 'break-thru fitness',
      trainer: 'whitney k. fowler',
    },
    {
      icon: <FaHeartbeat />,
      startTime: '18:00',
      endTime: '19:00',
      heading: 'crossfit',
      trainer: 'eric s. duncan',
    },
    {
      icon: <FaHeartbeat />,
      startTime: '21:00',
      endTime: '22:30',
      heading: 'zumba',
      trainer: 'edward b. lewis',
    },
    {
      icon: <FaHeartbeat />,
      startTime: '22:30',
      endTime: '23:30',
      heading: 'pilates',
      trainer: 'whitney k. fowler',
    },
    {
      icon: <FaHeartbeat />,
      startTime: '22:30',
      endTime: '22:45',
      heading: 'cardio circuit',
      trainer: 'meghan p. ingram',
    },
  ],
  saturday: [
    {
      icon: <FaHeartbeat />,
      startTime: '11:00',
      endTime: '12:30',
      heading: 'cardio circuit',
      trainer: 'ashley t. white',
    },
    {
      icon: <FaHeartbeat />,
      startTime: '12:00',
      endTime: '13:00',
      heading: 'body building',
      trainer: 'eric s. duncan',
    },
    {
      icon: <FaHeartbeat />,
      startTime: '12:00',
      endTime: '13:00',
      heading: 'break-thru fitness',
      trainer: 'alicia k. wright',
    },
    {
      icon: <FaHeartbeat />,
      startTime: '18:00',
      endTime: '19:00',
      heading: 'pilate',
      trainer: 'barbara s. romero',
    },
    {
      icon: <FaHeartbeat />,
      startTime: '18:00',
      endTime: '19:00',
      heading: 'crossfit',
      trainer: 'edward b. lewis',
    },
    {
      icon: <FaHeartbeat />,
      startTime: '18:00',
      endTime: '19:00',
      heading: 'body building',
      trainer: 'edward b. lewis',
    },
    {
      icon: <FaHeartbeat />,
      startTime: '18:00',
      endTime: '19:00',
      heading: 'break-thru fitness',
      trainer: 'alicia k. wright',
    },
    {
      icon: <FaHeartbeat />,
      startTime: '19:30',
      endTime: '19:45',
      heading: 'cardio circuit',
      trainer: 'virginia f. bryant',
    },
  ],
  sunday: [
    {
      icon: <FaHeartbeat />,
      startTime: '10:00',
      endTime: '11:00',
      heading: 'aqua aerobics',
      trainer: 'alicia k. wright',
    },
    {
      icon: <FaHeartbeat />,
      startTime: '10:30',
      endTime: '11:15',
      heading: 'cardio circuit',
      trainer: 'wesley d. richards',
    },
    {
      icon: <FaHeartbeat />,
      startTime: '14:00',
      endTime: '15:00',
      heading: 'yoga',
      trainer: 'ashley t. white',
    },
    {
      icon: <FaHeartbeat />,
      startTime: '17:00',
      endTime: '18:00',
      heading: 'aqua aerobics',
      trainer: 'barbara s. romero',
    },
    {
      icon: <FaHeartbeat />,
      startTime: '18:00',
      endTime: '19:00',
      heading: 'pilates',
      trainer: 'barbara s. romero',
    },
    {
      icon: <FaHeartbeat />,
      startTime: '18:00',
      endTime: '19:00',
      heading: 'crossfit',
      trainer: 'dennis y. allen',
    },
    {
      icon: <FaHeartbeat />,
      startTime: '19:30',
      endTime: '20:30',
      heading: 'body building',
      trainer: 'erick s. duncan',
    },
    {
      icon: <FaHeartbeat />,
      startTime: '19:30',
      endTime: '20:30',
      heading: 'break-thru fitness',
      trainer: 'whitney k. fowler',
    },
  ],
}

const weekdays = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday',
]
const WeeklySchedule = () => {
  const getCustomDays = () => {
    const daysOfWeek = [
      'sunday',
      'monday',
      'tuesday',
      'wednesday',
      'thursday',
      'friday',
      'saturday',
    ]
    const currentDate = new Date()
    const currentDayIndex = currentDate.getDay()
    const reorderedDays = [
      ...daysOfWeek.slice(currentDayIndex),
      ...daysOfWeek.slice(0, currentDayIndex),
    ]
    const reorderedCustomDays = [
      ...daysOfWeek.slice(currentDayIndex),
      ...daysOfWeek.slice(0, currentDayIndex),
    ]
    if (reorderedCustomDays.length > 0) {
      reorderedCustomDays[0] = 'today'
    }
    if (reorderedCustomDays.length > 1) {
      reorderedCustomDays[1] = 'tomorrow'
    }
    return { reorderedCustomDays, reorderedDays }
  }
  const { reorderedCustomDays, reorderedDays } = getCustomDays()
  const [currentDay, setCurrentDay] = useState(reorderedDays[0])
  const selectedDay = dataObject[`${currentDay}`]

  return (
    <>
      <div className="flex flex-wrap justify-center items-center gap-3 cursor-pointer mx-10 mb-10 mt-5 capitalize text-[0.7rem] sm:text-sm text-accent/80">
        {reorderedCustomDays.map((day, index) => {
          if (day == 'today') {
            day = reorderedDays[0]
          }
          if (day == 'tomorrow') {
            day = reorderedDays[1]
          }
          const selected =
            currentDay == day ? 'bg-primary text-white' : 'hover:text-primary'
          return (
            <p
              key={index}
              className={`${selected} rounded-full px-3`}
              onClick={() => {
                setCurrentDay(day)
              }}
            >
              {day == reorderedDays[0]
                ? 'today'
                : day == reorderedDays[1]
                ? 'tomorrow'
                : day}
            </p>
          )
        })}
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 border border-b-0 md:border-0">
        {selectedDay.map(
          ({ icon, startTime, endTime, heading, trainer }, index) => {
            return (
              <div
                key={index}
                className="text-center p-5 hover:bg-accent/5 cursor-pointer transition origin-center border-b  sm:odd:border-r md:odd:border-l-0 md:even:border-r boder"
              >
                <div className="text-3xl text-accent/80 w-max mx-auto mb-2.5 mt-1">
                  {icon}
                </div>
                <div className="text-xs bg-primary w-max mx-auto text-white rounded-full w-24 px-2.5 py-0.5 flex items-center gap-0.5">
                  <time dateTime="">{formatTime(startTime)}</time> <GoDash />
                  <time dateTime="">{formatTime(endTime)}</time>
                </div>
                <Heading text={heading} margin="mt-3 mb-1" size="text-sm" />
                <p className="capitalize text-accent/50 text-sm">
                  with {trainer}
                </p>
              </div>
            )
          }
        )}
      </div>
    </>
  )
}
export default WeeklySchedule
