import { FaXTwitter, FaFacebookF, FaPinterest } from 'react-icons/fa6'
import { RiInstagramFill } from 'react-icons/ri'
const icons = [
  { id: 1, icon: <FaXTwitter />, url: 'https://www.twitter.com' },
  { id: 2, icon: <FaFacebookF />, url: 'https://www.facebook.com' },
  { id: 3, icon: <RiInstagramFill />, url: 'https://www.instagram.com' },
  { id: 4, icon: <FaPinterest />, url: 'https://www.pinterest.com' },
]

const SocialIcons = () => {
  return (
    <>
      {icons.map(({ icon, url, id }) => {
        return (
          <li key={id} className=" hover:text-primary">
            <a href={url}>{icon}</a>
          </li>
        )
      })}
    </>
  )
}
export default SocialIcons
