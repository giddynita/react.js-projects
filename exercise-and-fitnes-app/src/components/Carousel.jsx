import { useRef } from 'react'
import { MdArrowForwardIos } from 'react-icons/md'
import { MdArrowBackIos } from 'react-icons/md'
import Slider from 'react-slick'

const slides = [
  {
    slideBackground: "bg-[url('./assets/images/shop_bg1.JPG')]",
  },
  {
    slideBackground: "bg-[url('./assets/images/shop_bg2.JPG')]",
  },
  {
    slideBackground: "bg-[url('./assets/images/shop_bg3.JPG')]",
  },
]

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: 'ease',
    pauseOnFocus: true,
    centerMode: true,
    centerPadding: '0px',
    arrows: false,
  }
  const slider = useRef(null)
  return (
    <Slider
      ref={slider}
      {...settings}
      className="slide-container w-full  border-b-[1px] border-accent/20"
      style={{ height: 'calc(52vw + 100px)' }}
    >
      {slides.map(({ slideBackground }) => {
        return (
          <div
            className={`w-full ${slideBackground} bg-cover bg-center h-[52vw] md:h-[39vw] border-b-4 border-b-primary text-base-100 relative lg:h-[400px] slide`}
          >
            <h3>Content</h3>
            <div className="absolute top-1/2 -translate-y-1/2 right-5 left-5 flex justify-between hidden slide-arrow">
              <button
                onClick={() => {
                  slider?.current?.slickPrev()
                }}
                className="slickArrow"
              >
                <MdArrowBackIos />
              </button>
              <button
                onClick={() => {
                  slider?.current?.slickNext()
                }}
                className="slickArrow"
              >
                <MdArrowForwardIos />
              </button>
            </div>
          </div>
        )
      })}
    </Slider>
  )
}
export default Carousel
