import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLpYf-jSKnQctEL8xSOgpqnKf0fvfB2dA",
  authDomain: "gptc-26ba6.firebaseapp.com",
  projectId: "gptc-26ba6",
  storageBucket: "gptc-26ba6.appspot.com",
  messagingSenderId: "535128751711",
  appId: "1:535128751711:web:9e7e1c24fed81d784365ea",
  measurementId: "G-9HHFDH1QBX"
};

  export default firebase.initializeApp(firebaseConfig)