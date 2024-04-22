import ContactForm from './ContactForm'
import Timetables from './Timetables'

const ContactSubPage = () => {
  return (
    <div
      className="borderTop w-full p-6"
      style={{
        columnCount: 2,
        columnRule: '1px solid #0000001a',
        columnGap: '4rem',
      }}
    >
      <Timetables />
      <ContactForm />
    </div>
  )
}
export default ContactSubPage
