import { Form } from 'react-router-dom'
import { MdEmail } from 'react-icons/md'
import FormInput from './FormInput'
import SubmitButton from './SubmitButton'
import { FaPencilAlt } from 'react-icons/fa'
import { RiAccountBoxFill } from 'react-icons/ri'

const ContactForm = () => {
  return (
    <Form>
      <div className="flex justify-between gap-x-2">
        <div className="w-1/2 relative ">
          <FormInput
            type="text"
            name="name"
            id="name"
            placeholder="Your name..."
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
          />
          <span className="absolute -translate-y-1/2 top-1/2 left-3 text-accent/70">
            <MdEmail className="w-4 h-4" />
          </span>
        </div>
      </div>
      <div className="relative">
        <textarea
          className="block w-full p-3 pl-8 mt-4 mb-6 border border-base-300 focus:border-primary focus:outline-none rounded-md resize-none placeholder-italic "
          name="message"
          id="message"
          cols="30"
          rows="8"
          placeholder="Your question..."
          required
        />
        <span className="absolute  top-3 left-3 text-accent/70">
          <FaPencilAlt className="w-4 h-4 " />
        </span>
      </div>

      <SubmitButton text="send question" />
    </Form>
  )
}
export default ContactForm
