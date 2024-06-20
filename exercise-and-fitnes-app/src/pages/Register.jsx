import { Form, Link, redirect, useNavigation } from 'react-router-dom'
import { FormInput, SubmitButton } from '../components'
import { auth, createUserProfileDocument } from '../firebase/firebase.utils'
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
    <section className="h-screen grid place-items-center">
      <Form
        method="POST"
        className="card w-96 p-8 bg-base-100 flex flex-col gap-y-2 text-gray-700 border border-accent/10 shadow"
      >
        <div>
          <h4 className="text-center text-3xl font-bold capitalize mb-1.5">
            create account
          </h4>
          <p className="text-center text-sm font-semibold">
            Have an account?
            <Link
              to="/login"
              className="ml-2 link link-hover link-primary capitalize"
            >
              sign in
            </Link>
          </p>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text capitalize">Name</span>
          </label>
          <FormInput type="text" placeholder="Name" name="name" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text capitalize">email</span>
          </label>
          <FormInput type="email" placeholder="Email" name="email" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text capitalize">password</span>
          </label>
          <FormInput type="password" placeholder="Password" name="password" />
          <p className="text-xs text-accent/70 mt-0.5">
            Password should be at least 6 characters
          </p>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text capitalize">confirm password</span>
          </label>
          <FormInput
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
          />
        </div>
        <div className="mt-3 flex flex-row gap-6">
          <SubmitButton
            text="create account"
            texting="creating account"
            navigation={navigation}
          />
        </div>
      </Form>
    </section>
  )
}
export default Register
