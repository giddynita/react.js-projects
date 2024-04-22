import { FaRegClock } from 'react-icons/fa6'

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
      <h3 className="uppercase pb-4 font-semibold text-accent/80">
        timetable / open hours
      </h3>
      <ul>
        {openHours.map(({ day, time }) => {
          return (
            <li
              className="flex items-center justify-between py-2 hover:bg-accent/[0.02] hover:text-accent/80 border-t-[1px] border-accent/10 first:border-t-0 cursor-pointer
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
