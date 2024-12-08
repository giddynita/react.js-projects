import { Button, FormInput, SectionTitle, SubmitButton } from '../components'
import { Form, redirect, useNavigation } from 'react-router-dom'
import { MdEmail } from 'react-icons/md'
import { FaHome, FaPencilAlt } from 'react-icons/fa'
import { RiAccountBoxFill } from 'react-icons/ri'
import FormTextArea from '../components/FormTextArea'
import { FaBriefcase, FaPhone } from 'react-icons/fa6'
import { toast } from 'react-toastify'

export const action = async ({ request }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  const { name, email, brief, message } = data
  if (!name || !email || !message) {
    toast.error('Kindly fill the required field(s)')
    return null
  }
  const handleReload = () => {
    return window.location.reload()
  }
  try {
    toast.success('Message sent successfully. We will get back to you shortly!')
    return null
  } catch (error) {
    const errorCode = error.code
    const errorMessage = error.message
    console.log(errorCode, errorMessage)
    return null
  }
}

const Contact = () => {
  const navigation = useNavigation()
  return (
    <>
      <section className="w-full bg-black bg-[url('./assets/images/contacts-slider-bg.png')] bg-center  py-6 sm:h-[62vw] md:h-[49vw] lg:h-[500px] border-y-[4px] border-y-primary relative text-gray-500 flex flex-col items-center justify-center text-center gap-10">
        <div className="uppercase text-white/80">
          <h3 className="text-4xl md:text-5xl font-extrabold word-spacing mb-1">
            get in touch
          </h3>
          <p className="sm:text-md md:text-lg font-semibold">
            come workout with us today
          </p>
        </div>
        <div className="flex gap-7  sm:gap-14 flex-nowrap ">
          <div className="">
            <MdEmail className="bg-white rounded-full mx-auto w-9 h-9 p-1.5 mb-2  text-black" />
            <p className="text-[0.6rem] sm:text-xs md:text-sm lg:text-md  font-semibold text-white/70 -mb-2.5 sm:-mb-1.5">
              email us at
            </p>
            <a
              href="mailto:mail@company.com"
              className="hover:text-secondary text-[0.6rem] sm:text-sm md:text-md lg:text-lg text-white/90 font-semibold"
            >
              mail@company.com
            </a>
          </div>
          <div>
            <FaHome className="bg-white rounded-full mx-auto w-9 h-9 p-1.5 mb-2.5  text-black" />
            <p className="text-[0.6rem] sm:text-xs sm:text-sm md:text-md lg:text-lg font-semibold leading-none text-white/90 mb-0.5  sm:-mb-0.5 lg:-mb-1">
              Amen Estate, 24
            </p>
            <p className="text-[0.6rem] sm:text-sm md:text-md lg:text-lg font-semibold leading-none text-white/90">
              Lagos - Nigeria
            </p>
          </div>
          <div>
            <FaPhone className="bg-white rounded-full mx-auto w-9 h-9 p-1.5 mb-2 -mt-[0.0323rem]  text-black" />
            <p className="text-[0.6rem] sm:text-xs md:text-sm lg:text-md  font-semibold text-white/70 -mb-2.5 sm:-mb-1.5">
              call us at
            </p>
            <a
              href="tel:+2348089646300"
              className="hover:text-secondary text-[0.6rem] sm:text-sm md:text-md lg:text-lg text-white/90 font-semibold "
            >
              234.808.964.6300
            </a>
          </div>
        </div>
        <div className="flex gap-8">
          <a href="#message">
            <Button
              type="button"
              text="send a message"
              customStyles="text-xs md:text-sm lg:text-md px-2 sm:w-40 md:w-44 lg:w-48 py-2.5 rounded font-semibold"
            />
          </a>
          <a href="#direction">
            <Button
              type="button"
              text="get directions"
              customStyles="text-xs md:text-sm lg:text-md px-2 sm:w-40 md:w-44 lg:w-48 py-2.5 rounded font-semibold"
            />
          </a>
        </div>
      </section>
      <section
        id="message"
        className="width pt-12 border border-x-0 border-t-0 border-b"
      >
        <SectionTitle title="send us a message" />
        <p className="text-center py-4 text-md text-accent/75">
          Have a question or need assistance? <br />
          Send us a message, and we'll get back to you as soon as possible.
        </p>
        <Form method="POST" className="w-[70%] mx-auto py-8">
          <div className="flex flex-col sm:flex-row gap-y-4 gap-x-2">
            <div className="relative w-full">
              <FormInput
                type="text"
                name="name"
                id="name"
                placeholder="Your name..."
                margin="pl-8"
                label="Name"
                required="*"
              />
              <span className="absolute -translate-y-1/2 top-3/4 left-3 text-accent/70">
                <RiAccountBoxFill className=" w-4 h-4 " />
              </span>
            </div>
            <div className="relative w-full">
              <FormInput
                name="email"
                type="email"
                id="email"
                placeholder="Your E-Mail..."
                margin="pl-8"
                label="Email"
                required="*"
              />
              <span className="absolute -translate-y-1/2 top-3/4 left-3 text-accent/70">
                <MdEmail className="w-4 h-4" />
              </span>
            </div>
          </div>
          <div className="relative mt-4">
            <FormInput
              name="brief"
              type="text"
              id="brief"
              placeholder="Why you are contacting us..."
              margin="pl-8"
              label="Subject"
            />
            <span className="absolute -translate-y-1/2 top-3/4 left-3 text-accent/70">
              <FaBriefcase className="w-3.5 h-3.5" />
            </span>
          </div>
          <div className="relative mt-4">
            <label htmlFor="message" className="font-semibold text-gray-700">
              Message <span className="text-red-600">*</span>
            </label>
            <FormTextArea
              name="message"
              id="message"
              cols="30"
              rows="8"
              placeholder="Your message..."
              margin="mt-1 mb-6 py-3 pl-8"
            />
            <span className="absolute top-[43.5px] left-3 text-accent/70">
              <FaPencilAlt className="w-3.5 h-3.5 " />
            </span>
          </div>
          <div className="w-36 mx-auto">
            <SubmitButton
              text="send message"
              texting="sending"
              navigation={navigation}
            />
          </div>
        </Form>
      </section>
      <section id="direction" className="width pt-12 pb-8">
        <SectionTitle title="find us on the map" />
        <p className="text-center py-4 text-md text-accent/75">
          Need directions? <br />
          Find us on the map below and easily navigate to our location. <br />{' '}
          We are located at Amen Estate, 24, Lagos, Nigeria.
        </p>
      </section>
    </>
  )
}
export default Contact
