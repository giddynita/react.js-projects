import { FaXTwitter, FaFacebookF, FaPinterest } from 'react-icons/fa6'
import { RiInstagramFill } from 'react-icons/ri'
const icons = [
  { icon: <FaXTwitter />, link: 'https://www.twitter.com' },
  { icon: <FaFacebookF />, link: 'https://www.facebook.com' },
  { icon: <RiInstagramFill />, link: 'https://www.instagram.com' },
  { icon: <FaPinterest />, link: 'https://www.pinterest.com' },
]

const SocialIcons = () => {
  return (
    <ul className="flex items-center gap-x-0.5 py-2">
      {icons.map(({ icon, link }) => {
        return (
          <li className="hover:text-primary">
            <a href={link}>{icon}</a>
          </li>
        )
      })}
    </ul>
  )
}
export default SocialIcons
