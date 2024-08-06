import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  getDoc,
  doc,
  setDoc,
  getDocs,
  collection,
} from 'firebase/firestore'
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithRedirect,
} from 'firebase/auth'
import { redirect } from 'react-router-dom'

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
const usersDatabase = getFirestore(app)
export const createUserProfileDocument = async (userAuth, additionalData) => {
  const userDocRef = doc(usersDatabase, `users/${userAuth.uid}`)
  const userDocSnapshot = await getDoc(userDocRef)
  if (!userDocSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }
  return userDocRef
}
export const auth = getAuth()

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
  prompt: 'select_account',
})
export const signInWithGoogle = async () => {
  if (window.innerWidth <= 425) {
    await signInWithRedirect(auth, provider)
  } else {
    await signInWithPopup(auth, provider)
  }
  return redirect('/')
}
export default app
