import { Form, Link, redirect, useNavigation } from 'react-router-dom'
import { FormInput, SubmitButton } from '../components'
import { auth } from '../firebase/firebase.utils'
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
  return (
    <section className="h-screen p-10 flex flex-col items-center justify-center gap-y-6">
      <Form
        method="POST"
        className="card w-[300px] pt-8 pb-6 px-4 bg-base-100 shadow flex flex-col gap-y-2 text-gray-700 border border-accent/10"
      >
        <div>
          <h4 className="text-center text-lg font-bold">Welcome back!</h4>
        </div>
        <FormInput type="email" placeholder="Email" name="email" />
        <FormInput type="password" placeholder="Password" name="password" />
        <div className="flex items-center justify-between my-2">
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              name="rememberMe"
              id="rememberMe"
              className="rounded"
            />
            <label htmlFor="rememberMe" className="text-xs">
              Remember me
            </label>
          </div>
          <p className="text-primary text-xs font-semibold link link-hover link-primary hover:none">
            Forgot your password?
          </p>
        </div>
        <SubmitButton
          text="sign in"
          texting="signing in"
          navigation={navigation}
        />
      </Form>
      <Link to="/register">
        <p className="text-center text-xs font-semibold shadow w-[300px] py-2.5 rounded">
          Don't have an account?
          <Link to="/register" className="ml-1 link link-hover link-primary">
            Sign up
          </Link>
        </p>
      </Link>
    </section>
  )
}
export default Login
