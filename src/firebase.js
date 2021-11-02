import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyAu_G-WGX0VNnPy-v3KGYr8OzgTKKNmOtE",
  authDomain: "curso-c616b.firebaseapp.com",
  projectId: "curso-c616b",
  storageBucket: "curso-c616b.appspot.com",
  messagingSenderId: "903410484074",
  appId: "1:903410484074:web:8fa0189426e65e2c67db13",
  measurementId: "G-HJ37MNL6T4"
})

export const auth = app.auth()
export default app
