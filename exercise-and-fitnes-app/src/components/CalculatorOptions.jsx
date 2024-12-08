import { BsHeartPulse } from 'react-icons/bs'
import { comingSoon } from '../utils'

const dataArray = [
  {
    icon: <BsHeartPulse />,
    text: 'body mass index',
  },
  {
    icon: <BsHeartPulse />,
    text: 'body fat index',
  },
  {
    icon: <BsHeartPulse />,
    text: 'calories burned',
  },
  {
    icon: <BsHeartPulse />,
    text: 'daily caloric intake',
  },
  {
    icon: <BsHeartPulse />,
    text: 'one-rep max',
  },
]

const CalculatorOptions = () => {
  return (
    <div className=" mt-12 mb-9 px-8 grid grid-cols-2 sm:px-0 sm:grid-cols-3 lg:grid-cols-5 ">
      {dataArray.map(({ icon, text }, index) => {
        return (
          <div
            key={index}
            className="py-6 relative border-r border-b odd:border-l cursor-pointer hoverDisplay borderDisplay"
          >
            <div className="flex items-center px-4 justify-center gap-2 opacity-1 initial transition duration-300">
              <div className="text-lg sm:text-3xl">{icon}</div>
              <p className="text-[8px] sm:text-[16px] font-semibold capitalize whitespace-nowrap">
                {text}
              </p>
            </div>
            <div className="text-center absolute w-full h-full top-0 left-0 flex flex-col items-center justify-center opacity-0 onHover transition duration-300">
              <p className="text-[12px] sm:text-[15px] whitespace-nowrap text-accent/80 capitalize">
                {text == 'daily caloric intake' ? 'caloric intake' : text}
              </p>
              <p
                className="text-[0.7rem] sm:text-xs text-primary"
                onClick={comingSoon}
              >
                Calculate Now
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
export default CalculatorOptions
