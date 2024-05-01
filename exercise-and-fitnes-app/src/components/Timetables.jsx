import { FaRegClock } from 'react-icons/fa6'
import Heading from './Heading'

const openHours = [
  {
    day: 'monday',
    time: '06:30 AM - 09:00 PM',
  },
  {
    day: 'tuesday',
    time: '06:30 AM - 11:00 PM',
  },
  {
    day: 'wednesday',
    time: '06:30 AM - 09:00 PM',
  },
  {
    day: 'thursday',
    time: '06:30 AM - 11:00 PM',
  },
  {
    day: 'friday',
    time: '06:30 AM - 11:00 PM',
  },
  {
    day: 'saturday',
    time: '06:30 AM - 08:00 PM',
  },
  {
    day: 'sunday',
    time: 'Closed',
  },
]

const Timetables = () => {
  return (
    <section>
      <Heading text="open hours" margin="mb-4" />
      <ul>
        {openHours.map(({ day, time }) => {
          return (
            <li
              className="flex items-center justify-between py-2 hover:bg-accent/[0.02] hover:text-accent/80 border-t-[1px] border-accent/10 first:border-t-0 cursor-pointer capitalize
            "
            >
              <p className="flex items-center gap-x-2">
                <FaRegClock />
                {day}
              </p>
              <p>{time} </p>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
export default Timetables
