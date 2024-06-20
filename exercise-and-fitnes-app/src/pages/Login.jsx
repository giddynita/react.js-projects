import { Form, Link, redirect, useNavigation } from 'react-router-dom'
import { FormInput, SubmitButton } from '../components'
import { auth, signInWithGoogle } from '../firebase/firebase.utils'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { toast } from 'react-toastify'

export const action = async ({ request }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  const { email, password } = data
  try {
    await signInWithEmailAndPassword(auth, email, password)
    toast.success('Logged in successfully')
    return redirect('/')
  } catch (error) {
    const errorCode = error.code
    const errorMessage = error.message
    toast.error(errorMessage)
    console.log(errorCode, errorMessage)
  }
  return null
}

const Login = () => {
  const navigation = useNavigation()
  console.log(navigation.state)
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="POST"
        className="card w-96 p-8 bg-base-100 shadow flex flex-col gap-y-2 text-gray-700 border border-accent/10"
      >
        <div>
          <h4 className="text-center text-3xl font-bold mb-2">Login</h4>
          <p className="text-center text-sm font-semibold">
            Don't have an account?
            <Link
              to="/register"
              className="ml-2 link link-hover link-primary capitalize"
            >
              sign up
            </Link>
          </p>
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
        </div>
        <div className="mt-3 flex flex-row justify-between gap-2">
          <div className="w-[40%]">
            <SubmitButton
              text="login"
              texting="signing in"
              navigation={navigation}
            />
          </div>
          <Link className="">
            <button
              type="button"
              className="uppercase bg-blue-500 text-white hover:bg-blue-700 rounded text-sm p-2"
              onClick={signInWithGoogle}
            >
              sign in with google
            </button>
          </Link>
        </div>
      </Form>
    </section>
  )
}
export default Login
