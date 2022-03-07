import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCywifdT5bu3iPrXTAUCUTPTtYBkYdOt_Y",
  authDomain: "tuesday-1cff2.firebaseapp.com",
  projectId: "tuesday-1cff2",
  storageBucket: "tuesday-1cff2.appspot.com",
  messagingSenderId: "317822824221",
  appId: "1:317822824221:web:e5f6e86ab9e61e0d63fbf4",
}

//init firebase
firebase.initializeApp(firebaseConfig)

//init services
const projectFireStore = firebase.firestore()
const projectAuth = firebase.auth()

//timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFireStore, projectAuth, timestamp }
