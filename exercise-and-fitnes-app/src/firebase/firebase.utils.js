import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithRedirect,
} from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCsJXUJT8O-Akqr77T89GhPTDncJCx09fI',
  authDomain: 'exercise-fitness-userlogin.firebaseapp.com',
  projectId: 'exercise-fitness-userlogin',
  storageBucket: 'exercise-fitness-userlogin.appspot.com',
  messagingSenderId: '1050775783214',
  appId: '1:1050775783214:web:2b2b2f7095f83e30051cbf',
  measurementId: 'G-BRN79KBJYJ',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth()
const provider = new GoogleAuthProvider()
provider.setCustomParameters({
  prompt: 'select_account',
})
export const signInWithGoogle = () => {
  if (window.innerWidth <= 425) {
    return signInWithRedirect(auth, provider)
  }
  return signInWithPopup(auth, provider)
}
export default app
