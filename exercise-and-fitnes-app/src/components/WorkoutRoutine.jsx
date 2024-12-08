import Heading from './Heading'
import Rating from './Rating'
import Button from './Button'
import buttWorkout from '../assets/images/about_1.jpg'
import { useRef } from 'react'
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'
import Slider from 'react-slick'
import { comingSoon } from '../utils'

const dataArray = [
  {
    image: buttWorkout,
    title: "nicole wilkons' best-ever butt workout!",
    level: 'intermediate',
    rating: 5,
    desc: 'Officiis assumenda saepe itaque tenetur eius qui officia, animi maxime dolorum doloremque praesentium fuga fugit labore',
  },
  {
    image: buttWorkout,
    title: "nicole wilkons' best-ever butt workout!",
    level: 'intermediate',
    rating: 5,
    desc: 'Officiis assumenda saepe itaque tenetur eius qui officia',
  },
  {
    image: buttWorkout,
    title: "nicole wilkons' best-ever butt workout!",
    level: 'intermediate',
    rating: 5,
    desc: 'Officiis assumenda saepe itaque tenetur eius qui officia, animi maxime dolorum doloremque praesentium fuga fugit labore',
  },
  {
    image: buttWorkout,
    title: "nicole wilkons' best-ever butt workout!",
    level: 'intermediate',
    rating: 5,
    desc: 'Officiis assumenda saepe itaque tenetur eius qui officia, animi maxime dolorum doloremque praesentium fuga fugit labore',
  },
]

const WorkoutRoutine = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: 'ease',
    pauseOnFocus: true,
    centerMode: false,
    centerPadding: '0px',
    arrows: false,
    className: 'slider variable-width',
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  }
  const slider = useRef(null)
  return (
    <div className="width mt-8 relative carousel-slide cursor-grab">
      <button
        onClick={() => {
          slider?.current?.slickPrev()
        }}
        className="absolute h-full -left-[10px] text-accent/10 text-2xl carousel-arrow transition duration-300 invisible sm:visible"
      >
        <MdArrowBackIos />
      </button>
      <button
        onClick={() => {
          slider?.current?.slickNext()
        }}
        className="absolute h-full -right-[16px] text-accent/10 text-2xl carousel-arrow transition duration-300 invisible sm:visible"
      >
        <MdArrowForwardIos />
      </button>
      <Slider ref={slider} {...settings} className="h-64 ">
        {dataArray.map(({ image, title, level, rating, desc }, index) => {
          return (
            <div
              key={index}
              className="relative overflow-hidden border-b rounded-lg  hoverEffect cursor-pointer h-64 slide"
            >
              <figure className=" w-full h-full">
                <img
                  src={image}
                  alt={title}
                  className="w-full"
                  loading="lazy"
                />
              </figure>
              <div className="absolute bottom-0 w-full border border-t-0 border-b-0 bg-white overflow-hidden">
                <div className=" overflow-hidden m-4 text-center">
                  <Heading
                    text="nicole wilkons' best-ever butt workout!"
                    margin="mt-1"
                    size="text-sm"
                  />
                  <p className="capitalize text-primary text-xs">{`${level} level`}</p>
                  <div className="max-h-0 overflow-hidden caption">
                    <Rating value={rating} align="mx-auto mb-1.5 mt-1" />
                    <p className="text-accent/70 text-xs max-h-14 overflow-hidden line-clamp-3 text-ellipsis">
                      {desc}
                    </p>
                    <Button
                      type="button"
                      customStyles="text-xs w-24 p-2.5 rounded mt-2.5"
                      text="read more"
                      clickFunction={comingSoon}
                    />
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </Slider>
    </div>
  )
}
export default WorkoutRoutine
