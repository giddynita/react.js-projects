import { NavLink } from 'react-router-dom'
import image from '../assets/images/img_1.png'
import articleImage1 from '../assets/images/article1.png'
import articleImage2 from '../assets/images/article2.png'
import articleImage3 from '../assets/images/article3.png'
import articleImage4 from '../assets/images/article4.png'

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
            <NavLink to={url}>
              <article key={index} className="w-56">
                <figure>
                  <img src={image} alt={title} />
                </figure>
                <h3 className="uppercase text-accent/80 mt-3 mb-0.5 font-bold ">
                  {title}
                </h3>
                <time dateTime="" className="text-accent/50">
                  {date}
                </time>
                <p className="py-2">{desc}</p>
                <p className="text-primary hover:text-secondary w-max">
                  Read More...
                </p>
              </article>
            </NavLink>
          )
        })}
      </div>
      <NavLink to="shop">
        <img src={image} alt="shop" />
      </NavLink>
    </div>
  )
}
export default BlogSubPage
