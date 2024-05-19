import { TiStarFullOutline } from 'react-icons/ti'
const ratings = [
  <TiStarFullOutline />,
  <TiStarFullOutline />,
  <TiStarFullOutline />,
  <TiStarFullOutline />,
  <TiStarFullOutline />,
]

const Rating = ({ productRatings, align }) => {
  return (
    <div
      className={`flex items-center justify-center w-max  text-accent/30 background-clip ${align} text-sm`}
    >
      {productRatings &&
        ratings.map((item, index) => {
          const rating = index < productRatings ? 'text-yellow-500' : ''
          return (
            <h5 key={index} className={rating}>
              {item}
            </h5>
          )
        })}
    </div>
  )
}
export default Rating
