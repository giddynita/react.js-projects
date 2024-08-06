import { FaBook, FaPerson, FaRocket, FaTrophy } from 'react-icons/fa6'
import { Banner, SectionTitle } from '../components'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import aboutImg1 from '../assets/images/about_1.jpg'
import aboutImg2 from '../assets/images/about_2.jpg'
import aboutImg3 from '../assets/images/about_3.jpg'
import aboutImg4 from '../assets/images/about_4.jpg'
import partnerImg from '../assets/images/partners.png'
import { FiZoomIn } from 'react-icons/fi'

const about = [
  {
    icon: <FaBook />,
    figure: '0423',
    name: 'workshop conducted',
    link: 'Learn more',
  },
  {
    icon: <FaPerson />,
    figure: '0025',
    name: 'trained professionals',
    link: 'Meet them',
  },
  {
    icon: <FaRocket />,
    figure: '0485',
    name: 'fitness equipments',
    link: 'More info',
  },
  {
    icon: <FaTrophy />,
    figure: '0924',
    name: 'premium memberships',
    link: 'Join us',
  },
  {
    icon: <FaShoppingCart />,
    figure: '0385',
    name: 'product sold',
    link: 'Shop now',
  },
]
const aboutImages = [aboutImg1, aboutImg2, aboutImg3, aboutImg4]
const partnerImgs = [partnerImg, partnerImg, partnerImg, partnerImg, partnerImg]
const About = () => {
  return (
    <>
      <Banner
        pageName="about"
        subtitle="who we are, what we do"
        backgroundImage="bg-[url('./assets/images/about-banner.PNG')]"
      />
      <section className="my-12 width">
        <SectionTitle title="your transformation is our passion" />
        <p className="text-md text-center px-3.5 pt-3.5 pb-7 text-accent/70">
          We are your personal trainer, your nutritionist, your supplement
          expert. <br />
          We provide the knowledge and the tools you need to burn fat, build
          muscle and become your best self.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {about.map((info) => {
            const { icon, figure, name, link, address } = info
            return (
              <div className="flex flex-col gap-3.5 items-center pt-7">
                <div className="text-3xl text-accent/80">{icon}</div>

                <div className="flex gap-0.5">
                  {Array.from(figure).map((digit) => {
                    return (
                      <p className="text-3xl text-center font-extrabold bg-accent/80 text-white/95 rounded-md w-8 py-0.5 figure">
                        {digit}
                      </p>
                    )
                  })}
                </div>
                <p className="uppercase text-accent/80 text-xs font-semibold text-center">
                  {name} <br />
                  <Link
                    to="#"
                    className="text-sm text-accent/40 hover:text-primary font-normal text-decoration "
                  >
                    {link}
                  </Link>
                </p>
              </div>
            )
          })}
        </div>
      </section>
      <section className="grid grid-cols-4">
        {aboutImages.map((img) => {
          return (
            <figure className="hover:cursor-pointer  overflow-hidden relative fig">
              <img
                src={img}
                alt="about"
                className=" transition-all duration-300 img"
              />
              <div className="black-hover absolute top-0 w-full h-full bg-black/70"></div>
              <div className="black-hover absolute top-0 w-full h-full transition-all duration-100 flex items-center justify-center">
                <FiZoomIn className="text-white text-2xl sm:text-3xl md:text-4xl font-bolder zoom origin-center" />
              </div>
            </figure>
          )
        })}
      </section>
      <section className="my-12 width">
        <SectionTitle title="our partners" />
        <p className="text-md text-center px-3.5 pt-3.5 pb-7 text-accent/70">
          Most of our partners regularly offer exclusive promotions that help
          you to increase your results even faster.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 border border-r-0 border-b-0">
          {partnerImgs.map((img) => {
            return (
              <figure className="border border-l-0 border-t-0 partner h-[80px] py-5 relative cursor-pointer">
                <img
                  src={img}
                  alt="deCoda"
                  className="h-full mx-auto pImg opacity-100 visible transition-all duration-300 origin-center"
                />
                <figcaption className="absolute top-0 w-full h-full flex flex-col items-center justify-center opacity-0 invisible transition-all duration-300  origin-center pCap">
                  <h6 className="font-semibold text-md text-accent/80">
                    Decoda
                  </h6>
                  <p className="text-primary text-sm">www.decoda.com</p>
                </figcaption>
              </figure>
            )
          })}
        </div>
      </section>
    </>
  )
}
export default About
