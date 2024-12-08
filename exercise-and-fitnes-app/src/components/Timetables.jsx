import { FaRegClock } from 'react-icons/fa6'
import Heading from './Heading'
import { formatTime } from '../utils'
import { GoDash } from 'react-icons/go'
import { useEffect, useState } from 'react'

const openHours = [
  {
    day: 'monday',
    openTime: '06:30',
    closeTime: '21:00',

    dayIndex: 1,
  },
  {
    day: 'tuesday',
    openTime: '06:30',
    closeTime: '23:00',
    dayIndex: 2,
  },
  {
    day: 'wednesday',
    openTime: '06:30',
    closeTime: '21:00',
    dayIndex: 3,
  },
  {
    day: 'thursday',
    openTime: '06:30',
    closeTime: '23:00',
    dayIndex: 4,
  },
  {
    day: 'friday',
    openTime: '06:30',
    closeTime: '23:00',
    dayIndex: 5,
  },
  {
    day: 'saturday',
    openTime: '06:30',
    closeTime: '20:00',
    dayIndex: 6,
  },
  {
    day: 'sunday',
    openTime: 'Closed',
    dayIndex: 0,
  },
]
const storeSchedule = {
  0: { openTime: '', closeTime: '' },
  1: { openTime: '06:30', closeTime: '21:00' },
  2: {
    openTime: '06:30',
    closeTime: '23:00',
  },
  3: { openTime: '06:30', closeTime: '21:00' },
  4: { openTime: '06:30', closeTime: '23:00' },
  5: { openTime: '06:30', closeTime: '23:00' },
  6: { openTime: '06:30', closeTime: '20:00' },
}

const Timetables = () => {
  const [timeRemaining, setTimeRemaining] = useState('')
  const calculateRemainingTime = () => {
    const now = new Date()
    const today = now.getDay()
    const todaySchedule = storeSchedule[today]
    const openingTime = new Date(now)
    const closingTime = new Date(now)
    const [openHour, openMinute] = todaySchedule.openTime.split(':').map(Number)
    const [closeHour, closeMinute] = todaySchedule.closeTime
      .split(':')
      .map(Number)
    openingTime.setHours(openHour, openMinute, 0)
    closingTime.setHours(closeHour, closeMinute, 0)

    if (now < openingTime) {
      const timeUntilOpen = openingTime - now
      const hours = Math.floor(timeUntilOpen / (1000 * 60 * 60))
      const minutes = Math.floor(
        (timeUntilOpen % (1000 * 60 * 60)) / (1000 * 60)
      )
      const seconds = Math.floor((timeUntilOpen % (1000 * 60)) / 1000)
      setTimeRemaining(`Opens in ${hours}:${minutes}:${seconds} `)
    } else if (now >= openingTime && now < closingTime) {
      const timeUntilClose = closingTime - now
      const hours = Math.floor(timeUntilClose / (1000 * 60 * 60))
      const minutes = Math.floor(
        (timeUntilClose % (1000 * 60 * 60)) / (1000 * 60)
      )
      const seconds = Math.floor((timeUntilClose % (1000 * 60)) / 1000)
      setTimeRemaining(`Closes in ${hours}:${minutes}:${seconds}`)
    } else {
      const nextDay = (today + 1) % 7
      const nextDaySchedule = storeSchedule[nextDay]
      const nextOpenTime = new Date(now)
      const [nextOpenHour, nextOpenMinute] = nextDaySchedule.openTime
        .split(':')
        .map(Number)
      nextOpenTime.setDate(now.getDate() + 1)
      nextOpenTime.setHours(nextOpenHour, nextOpenMinute, 0)
      const timeUntilNextOpen = nextOpenTime - now
      const hours = Math.floor(timeUntilNextOpen / (1000 * 60 * 60))
      const minutes = Math.floor(
        (timeUntilNextOpen % (1000 * 60 * 60)) / (1000 * 60)
      )
      /* setTimeRemaining(
        `Opens in ${hours}${hours > 1 ? 'hrs' : 'hr'} : ${minutes}${
          minutes > 1 ? 'mins' : 'min'
        }`
      ) */
      setTimeRemaining('Closed')
    }
  }
  useEffect(() => {
    calculateRemainingTime()
    const timer = setInterval(calculateRemainingTime, 1000)
    return () => clearInterval(timer)
  }, [])
  return (
    <section>
      <Heading text="open hours" margin="mb-4" />
      <ul>
        {openHours.map(({ day, openTime, closeTime, dayIndex }, index) => {
          const currentDate = new Date()
          const currentDayIndex = currentDate.getDay()
          const colorCurrrentDay =
            dayIndex == currentDayIndex &&
            'font-semibold text-primary hover:text-primary'
          return (
            <li
              key={index}
              className={`flex items-center justify-between py-2 hover:bg-accent/[0.02] hover:text-accent/80 border-t-[1px] border-accent/10 first:border-t-0 cursor-pointer  ${colorCurrrentDay}
            `}
            >
              <p className="flex items-center gap-x-2 capitalize">
                <FaRegClock />
                {day}
              </p>
              <div className="flex gap-2.5">
                {dayIndex == currentDayIndex && day !== 'sunday' && (
                  <p className=" text-[11px] italic text-gray-400 font-semibold tracking-wider">
                    {timeRemaining}
                  </p>
                )}

                {day == 'sunday' ? (
                  <p>{openTime}</p>
                ) : (
                  <div className="flex items-center gap-1">
                    <p>{formatTime(openTime)}</p>
                    <GoDash />
                    <p>{formatTime(closeTime)} </p>
                  </div>
                )}
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
export default Timetables
