import { Form, Link } from 'react-router-dom'
import { FormInput, SubmitButton } from '../components'
import { signInWithGoogle } from '../firebase/firebase.utils'

export const action = () => {
  return null
}

const Login = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="POST"
        className="card w-96 p-8 bg-base-100 shadow flex flex-col gap-y-4 text-gray-700 border border-accent/10"
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>
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
        <div className="mt-3 flex flex-row gap-4">
          <SubmitButton
            text="sign in"
            texting="logging in"
            navigation={navigation}
          />
          <button
            type="button"
            className="uppercase bg-blue-500 p-3 text-white hover:bg-blue-700 rounded text-sm"
            onClick={signInWithGoogle}
          >
            sign in with google
          </button>
        </div>
        <p className="text-center">
          Don't have an account yet?
          <Link
            to="/register"
            className="ml-2 link link-hover link-primary capitalize"
          >
            register
          </Link>
        </p>
      </Form>
    </section>
  )
}
export default Login
