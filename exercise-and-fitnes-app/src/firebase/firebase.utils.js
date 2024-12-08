import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  getDoc,
  doc,
  addDoc,
  setDoc,
  collection,
} from 'firebase/firestore'
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithRedirect,
} from 'firebase/auth'
import { redirect } from 'react-router-dom'
import { formatDateTime } from '../utils'

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
export const database = getFirestore(app)
export const createUserProfileDocument = async (userAuth, name) => {
  const userDocRef = doc(database, `users/${userAuth.uid}`)
  const { email } = userAuth
  const createdAt = new Date()
  try {
    await setDoc(userDocRef, {
      email,
      createdAt,
      username: name,
    })
  } catch (error) {
    console.log('error creating user in the database', error.message)
  }

  /* const userDocSnapshot = await getDoc(userDocRef)
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
  } */
  return userDocRef
}
export const auth = getAuth(app)
export const createOrder = async (uid, orderInfo) => {
  const userDocRef = collection(database, `orders/${uid}/orders`)
  const createdAt = new Date()
  try {
    await addDoc(userDocRef, {
      createdAt: formatDateTime(createdAt),
      status: 'pending',
      ...orderInfo,
    })
  } catch (error) {
    console.log('error creating order in the database', error.message)
  }
}
const provider = new GoogleAuthProvider()
provider.setCustomParameters({
  prompt: 'select_account',
})
export const signInWithGoogle = async () => {
  await signInWithPopup(auth, provider)
  return redirect('/')
}
export default app
