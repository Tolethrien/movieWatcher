// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABD0L97c-RPx-YhPxJbgsc3yFSEgTHecI",
  authDomain: "movienight-642e4.firebaseapp.com",
  projectId: "movienight-642e4",
  storageBucket: "movienight-642e4.appspot.com",
  messagingSenderId: "541153002645",
  appId: "1:541153002645:web:c0711e8a8680cc1ef3879c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();

export default getFirestore();
