import { Form, useNavigation } from 'react-router-dom'
import { MdEmail } from 'react-icons/md'
import FormInput from './FormInput'
import SubmitButton from './SubmitButton'
import { FaPencilAlt } from 'react-icons/fa'
import { RiAccountBoxFill } from 'react-icons/ri'
import FormTextArea from './FormTextArea'
import { toast } from 'react-toastify'

export const action = async () => {
  return null
}

const ContactForm = () => {
  const navigation = useNavigation()
  const handleSubmit = async (e) => {
    const form = e.target
    const formData = new FormData(form)
    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')
    if (!name || !email || !message) {
      toast.error('Kindly fill the required field(s)')
    }
    toast.success('Message sent successfully. We will get back to you shortly!')
    form.reset()
  }
  return (
    <Form method="POST" onSubmit={handleSubmit}>
      <div className="flex justify-between gap-x-2">
        <div className="w-1/2 relative ">
          <FormInput
            type="text"
            name="name"
            id="name"
            placeholder="Your name..."
            margin="pl-8"
          />
          <span className="absolute -translate-y-1/2 top-1/2 left-3 text-accent/70">
            <RiAccountBoxFill className=" w-4 h-4 " />
          </span>
        </div>
        <div className="relative w-1/2 ">
          <FormInput
            name="email"
            type="email"
            id="email"
            placeholder="Your E-Mail..."
            margin="pl-8"
          />
          <span className="absolute -translate-y-1/2 top-1/2 left-3 text-accent/70">
            <MdEmail className="w-4 h-4" />
          </span>
        </div>
      </div>
      <div className="relative">
        <FormTextArea
          name="message"
          id="message"
          cols="30"
          rows="8"
          placeholder="Your question..."
          margin="mt-4 mb-6 py-3 pl-8"
        />
        <span className="absolute top-3.5 left-3 text-accent/70">
          <FaPencilAlt className="w-3.5 h-3.5 " />
        </span>
      </div>
      <SubmitButton
        text="send question"
        texting="sending"
        navigation={navigation}
      />
    </Form>
  )
}
export default ContactForm
