import testimonialImg from '../assets/images/review-img.png'
import { FaQuoteLeft } from 'react-icons/fa6'
import { useRef } from 'react'
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'
import Slider from 'react-slick'
const dataArray = [
  {
    icon: <FaQuoteLeft />,
    paragraph1:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, doloremque beatae? Natus quis harum velit rerum perspiciatis facilis facere tempora debitis culpa nobis Id consequuntur numquam quis nobis fugiat minus.',
    paragraph2:
      'Beatae inventore pariatur a labore, vitae quia nihil ad voluptas nobis unde, doloremque explicabo suscipit corporis! Laboriosam cum repellat exercitationem consequuntur nisi animi maiores ducimus.',
    img: testimonialImg,
    name: 'gideon onita',
    date: 'August 11, 2024',
  },
  {
    icon: <FaQuoteLeft />,
    paragraph1:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, doloremque beatae? Natus quis harum velit rerum perspiciatis facilis facere tempora debitis culpa nobis Id consequuntur numquam quis nobis fugiat minus.',
    paragraph2:
      'Beatae inventore pariatur a labore, vitae quia nihil ad voluptas nobis unde, doloremque explicabo suscipit corporis! Laboriosam cum repellat exercitationem consequuntur nisi animi maiores ducimus.',
    img: testimonialImg,
    name: 'gideon onita',
    date: 'August 11, 2024',
  },
  {
    icon: <FaQuoteLeft />,
    paragraph1:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, doloremque beatae? Natus quis harum velit rerum perspiciatis facilis facere tempora debitis culpa nobis Id consequuntur numquam quis nobis fugiat minus.',
    paragraph2:
      'Beatae inventore pariatur a labore, vitae quia nihil ad voluptas nobis unde, doloremque explicabo suscipit corporis! Laboriosam cum repellat exercitationem consequuntur nisi animi maiores ducimus.',
    img: testimonialImg,
    name: 'gideon onita',
    date: 'August 11, 2024',
  },
]

const ReviewHomePage = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 15000,
    cssEase: 'ease',
    pauseOnFocus: true,
    centerMode: false,
    centerPadding: '0px',
    arrows: false,
    className: 'slider variable-width',
    adaptiveHeight: true,
  }
  const slider = useRef(null)
  return (
    <div className="width my-8 relative carousel-slide cursor-grab px-[5%]">
      <button
        onClick={() => {
          slider?.current?.slickPrev()
        }}
        className="absolute h-full left-0 text-accent/10 text-2xl carousel-arrow transition duration-300 ml-4"
      >
        <MdArrowBackIos />
      </button>
      <button
        onClick={() => {
          slider?.current?.slickNext()
        }}
        className="absolute h-full -right-[6px] text-accent/10 text-2xl carousel-arrow transition duration-300 mr-4 "
      >
        <MdArrowForwardIos />
      </button>
      <Slider ref={slider} {...settings}>
        {dataArray.map(
          ({ icon, paragraph1, paragraph2, img, name, date }, index) => {
            return (
              <div key={index} className=" text-center text-accent/80 mb-10">
                <div className="mx-auto text-2xl w-max mb-1 ">{icon}</div>
                <div className="text-sm my-2.5">
                  <p className="mb-1.5">{paragraph1}</p>
                  <p>{paragraph2}</p>
                </div>

                <figure className="w-16 h-16 mx-auto mt-3.5 mb-1 ">
                  <img
                    src={img}
                    alt={name}
                    className="rounded-full border-2 border-accent/25"
                  />
                </figure>

                <p className="uppercase font-semibold -mb-2">{name}</p>
                <time className="text-xs text-accent/60">{date}</time>
              </div>
            )
          }
        )}
      </Slider>
    </div>
  )
}
export default ReviewHomePage
