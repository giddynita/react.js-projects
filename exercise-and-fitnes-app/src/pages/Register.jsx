import { Form, Link, redirect, useNavigation } from 'react-router-dom'
import { FormInput, SubmitButton } from '../components'
import {
  auth,
  createUserProfileDocument,
  signInWithGoogle,
} from '../firebase/firebase.utils'
import { toast } from 'react-toastify'
import { createUserWithEmailAndPassword } from 'firebase/auth'

export const action = async ({ request }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  const { name, email, password, confirmPassword } = data
  if (password !== confirmPassword) {
    toast.error('Passwords do not match')
    return null
  }
  if (password.length < 6) {
    toast.error('Password should be at least 6 characters')
    return null
  }
  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    )
    await createUserProfileDocument(userCredentials.user, { displayName: name })
    toast.success('Account created successfully')
    return redirect('/')
  } catch (error) {
    const errorCode = error.code
    const errorMessage = error.message
    console.log(errorCode, errorMessage)
    return null
  }
}

const Register = () => {
  const navigation = useNavigation()
  return (
    <section className="h-screen m-10 flex flex-col items-center justify-center gap-y-6">
      <Form
        method="POST"
        className="card w-[300px] p-8 bg-base-100 flex flex-col gap-y-2 text-gray-700 border border-accent/10 shadow pt-8 pb-6 px-4"
      >
        <div>
          <h4 className="text-center text-lg font-bold">Create an account</h4>
        </div>
        <FormInput type="text" placeholder="Name" name="name" />
        <FormInput type="email" placeholder="Email" name="email" />
        <FormInput type="password" placeholder="Password" name="password" />
        <p className="text-xs text-accent/70 -mt-1">
          Password should be at least 6 characters.
        </p>
        <FormInput
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
        />
        <div className="mt-3">
          <SubmitButton
            text="sign up"
            texting="creating your account"
            navigation={navigation}
          />
        </div>
        <button
          type="button"
          className="uppercase bg-blue-500 text-white hover:bg-blue-700 rounded text-sm p-2"
          onClick={signInWithGoogle}
        >
          sign in with google
        </button>
      </Form>
      <Link to="/login">
        <p className="text-center text-xs font-semibold shadow w-[300px] py-2.5 rounded">
          Have an account?
          <Link to="/login" className="ml-1 link link-hover link-primary">
            Sign in
          </Link>
        </p>
      </Link>
    </section>
  )
}
export default Register
