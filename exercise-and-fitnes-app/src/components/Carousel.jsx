import { useEffect, useRef, useState } from 'react'
import { MdArrowForwardIos } from 'react-icons/md'
import { MdArrowBackIos } from 'react-icons/md'

import img1 from '../assets/images/img1_carousel.png'
import img2 from '../assets/images/img2_carousel.png'
import img3 from '../assets/images/img3_carousel.png'
import img4 from '../assets/images/img4_carousel.png'

import { IoShieldCheckmarkSharp } from 'react-icons/io5'
import carousel1 from '../assets/images/hero-carousel-1.jpg'
import carousel2 from '../assets/images/hero-carousel-2.jpg'
import carousel3 from '../assets/images/hero-carousel-3.jpg'
import carousel4 from '../assets/images/hero-carousel-4.jpg'
import { TbRuler2 } from 'react-icons/tb'

const Carousel = () => {
  const slides = [
    {
      background: carousel1,
      preTitle: 'Welcome to',
      title: 'ForgeFit',
      subtitle: 'forge your best self',
      list: [
        { text: 'personalized workouts', icon: <IoShieldCheckmarkSharp /> },
        { text: 'expert trainer', icon: <IoShieldCheckmarkSharp /> },
        { text: 'wellness tips', icon: <IoShieldCheckmarkSharp /> },
        { text: 'community support', icon: <IoShieldCheckmarkSharp /> },
      ],
      image: img1,
    },
    {
      background: carousel2,
      preTitle: 'We provide',
      title: 'diet plans',
      subtitle: 'fuel your body, feed your goals',
      list: [
        { text: 'easy recipes', icon: <IoShieldCheckmarkSharp /> },
        { text: 'expert advice', icon: <IoShieldCheckmarkSharp /> },
        { text: 'targeted diets', icon: <IoShieldCheckmarkSharp /> },
        { text: 'weight management', icon: <IoShieldCheckmarkSharp /> },
      ],
      image: img2,
    },
    {
      background: carousel3,
      preTitle: 'Discover Customized',
      title: 'workout plans',
      subtitle: 'forge your path to fitness',
      list: [
        { text: 'tailored routines', icon: <IoShieldCheckmarkSharp /> },
        { text: 'dynamic exercises', icon: <IoShieldCheckmarkSharp /> },
        { text: 'adaptive plans', icon: <IoShieldCheckmarkSharp /> },
        { text: 'flexible schedules', icon: <IoShieldCheckmarkSharp /> },
      ],
      image: img3,
    },
    {
      background: carousel4,
      preTitle: 'Track your',
      title: 'progress',
      subtitle: 'measure, improve, succeed',
      list: [
        { text: 'performance report', icon: <IoShieldCheckmarkSharp /> },
        { text: 'calorie monitoring', icon: <IoShieldCheckmarkSharp /> },
        { text: 'goal tracking', icon: <IoShieldCheckmarkSharp /> },
        { text: 'personalized feedback', icon: <IoShieldCheckmarkSharp /> },
      ],
      image: img4,
    },
  ]
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(TbRuler2)
  useEffect(() => {
    let interval
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
      }, 15000)
    }
    return () => clearInterval(interval)
  }, [isPlaying, slides.length])
  const handleMouseEnter = () => {
    setIsPlaying(false)
  }
  const handleMouseLeave = () => {
    setIsPlaying(true)
  }
  return (
    <div
      className="carousel-container h-[52vw] md:h-[43vw] lg:h-[480px] relative border-y-4 border-y-primary"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute w-full h-full flex items-center justify-between px-3 z-40 text-white opacity-0 button-container">
        <button
          className="slickArrow bg-gray-900/80"
          onClick={() =>
            setCurrentSlide((prev) =>
              prev === 0 ? slides.length - 1 : prev - 1
            )
          }
        >
          <MdArrowBackIos />
        </button>
        <button
          className="slickArrow bg-gray-900/80"
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        >
          <MdArrowForwardIos />
        </button>
      </div>
      <div
        className="carousel-slide "
        style={{
          backgroundImage: `url(${slides[currentSlide].background}) `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transformOrigin: 'center',
          transition: 'background 1s ease-in-out',
        }}
      >
        <div className="absolute w-full h-full bg-black/80 top-0"></div>
        {slides.map(({ preTitle, title, subtitle, list, image }, index) => {
          const oddSlide = index > 0 && index % 2 !== 0
          const reverse = oddSlide ? 'flex-row-reverse' : 'flex-row'
          const initialIndex = index
          return (
            <div
              key={index}
              className={`absolute left-1/2 -translate-x-1/2  flex items-center ${reverse} width h-full`}
            >
              <div
                key={index}
                className={`w-full h-full px-4 flex flex-col justify-center `}
              >
                <p
                  className={`italic carousel-content-pretitle text-md sm:text-xl md:text-2xl ${
                    index === currentSlide ? 'active' : ''
                  } ${
                    index !== currentSlide && reverse === 'flex-row-reverse'
                      ? 'reverse-inactive'
                      : ''
                  }  ${
                    index !== currentSlide && reverse === 'flex-row'
                      ? 'inactive'
                      : ''
                  }`}
                >
                  {preTitle}
                </p>
                <div className="">
                  <h1
                    className={` font-bold text-md sm:text-4xl md:text-[2.5rem] lg:text-6xl uppercase carousel-content-title ${
                      index === currentSlide ? 'active' : ''
                    } ${
                      index !== currentSlide && reverse === 'flex-row-reverse'
                        ? 'reverse-inactive'
                        : ''
                    }  ${
                      index !== currentSlide && reverse === 'flex-row'
                        ? 'inactive'
                        : ''
                    }
                    }`}
                  >
                    {title}
                  </h1>
                  <p
                    className={`carousel-content-subtitle uppercase text-[0.5rem] sm:text-xs md:text-sm pl-0.5 ${
                      index === currentSlide ? 'active' : ''
                    } ${
                      index !== currentSlide && reverse === 'flex-row-reverse'
                        ? 'reverse-inactive'
                        : ''
                    }  ${
                      index !== currentSlide && reverse === 'flex-row'
                        ? 'inactive'
                        : ''
                    }`}
                  >
                    {subtitle}
                  </p>
                  <ul className="hidden md:flex flex-wrap  uppercase text-[9px] gap-x-2 carousel-content-list mt-10">
                    {list?.map(({ text, icon }, index) => {
                      const duration = index * 0.2 + 1.6
                      const animation =
                        initialIndex == currentSlide
                          ? `slide-in-list ${duration}s forwards ease-in-out`
                          : `slide-out-list 0.3s forwards ease-in-out`
                      return (
                        <li
                          key={index}
                          className="flex flex-wrap py-3 items-center justify-left border-r border-dotted last:border-0  gap-x-1 "
                          style={{
                            animation,
                          }}
                        >
                          <span className="w-6 h-6 bg-green-500 text-white rounded-full flex flex-row items-center justify-center text-[16px] font-extrabold ">
                            {icon}
                          </span>
                          <p className=" h-max  max-w-[70px] md:max-w-full mr-2 ">
                            {text}
                          </p>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
              <div
                className={` w-[60%] h-full grid items-end carousel-image ${
                  index === currentSlide && reverse == 'flex-row'
                    ? 'active'
                    : ''
                } ${
                  index === currentSlide && reverse == 'flex-row-reverse'
                    ? 'reverse-active'
                    : ''
                }
                ${
                  index !== currentSlide && reverse == 'flex-row'
                    ? 'inactive'
                    : ''
                } ${
                  index !== currentSlide && reverse == 'flex-row-reverse'
                    ? 'reverse-inactive'
                    : ''
                } `}
              >
                <img
                  src={image}
                  alt={image}
                  className="mx-auto"
                  loading="lazy"
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Carousel
