import { Form, Link, useNavigation } from 'react-router-dom'
import { FormInput, SubmitButton } from '../components'
import { signInWithGoogle } from '../firebase/firebase.utils'

export const action = () => {
  return null
}

const Register = () => {
  const navigation = useNavigation()
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="POST"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4 text-gray-700"
      >
        <h4 className="text-center text-3xl font-bold ">Register</h4>
        <div className="form-control">
          <label className="label">
            <span className="label-text capitalize">username</span>
          </label>
          <FormInput type="text" placeholder="Username" name="username" />
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
        <div className="mt-3 flex flex-row gap-6">
          <SubmitButton
            text="register"
            texting="registering"
            navigation={navigation}
          />
          <SubmitButton
            text="sign in with google"
            texting="signing in"
            navigation={navigation}
            btnFunc={signInWithGoogle}
          />
        </div>
        <p className="text-center">
          Already a member?
          <Link
            to="/login"
            className="ml-2 link link-hover link-primary capitalize"
          >
            login
          </Link>
        </p>
      </Form>
    </section>
  )
}
export default Register
