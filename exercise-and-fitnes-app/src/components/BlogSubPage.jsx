import { Link } from 'react-router-dom'
import image from '../assets/images/img_1.png'
import articleImage1 from '../assets/images/article1.png'
import articleImage2 from '../assets/images/article2.png'
import articleImage3 from '../assets/images/article3.png'
import articleImage4 from '../assets/images/article4.png'
import Heading from './Heading'

const articles = [
  {
    image: articleImage1,
    title: 'the code of fitness ethics',
    url: 'the-code-of-fitness-ethics',
    date: 'April 18, 2024',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt non consequatur voluptatum adipisci',
  },
  {
    image: articleImage2,
    title: 'get fit with us',
    url: 'get-fit-with-us',
    date: 'April 19, 2024',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt non consequatur voluptatum adipisci',
  },
  {
    image: articleImage3,
    title: 'visit our new facilities',
    url: 'visit-our-new-facilities',
    date: 'April 20, 2024',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt non consequatur voluptatum adipisci',
  },
  {
    image: articleImage4,
    title: 'new website launched',
    url: 'new-website-launched',
    date: 'April 21, 2024',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt non consequatur voluptatum adipisci',
  },
]
const BlogSubPage = () => {
  return (
    <div className="borderTop w-full p-6">
      <div className="mb-3 grid grid-cols-4 place-items-center">
        {articles.map(({ image, title, date, desc, url }, index) => {
          return (
            <Link to={url} key={index}>
              <article key={index} className="w-52">
                <figure className="mb-3">
                  <img src={image} alt={title} />
                </figure>
                <Heading text={title} margin="mb-0.5" />
                <time dateTime="" className="text-accent/50 mt-[-35px]">
                  {date}
                </time>
                <p className="py-2">{desc}</p>
                <p className="text-primary hover:text-secondary w-max">
                  Read More...
                </p>
              </article>
            </Link>
          )
        })}
      </div>
      <figure>
        <img src={image} alt="shop" />
      </figure>
    </div>
  )
}
export default BlogSubPage
