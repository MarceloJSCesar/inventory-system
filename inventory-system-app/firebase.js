// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBF-VnDPgBAbjLG7GphvYdipCcerUFu70",
  authDomain: "inventory-management-1b6af.firebaseapp.com",
  projectId: "inventory-management-1b6af",
  storageBucket: "inventory-management-1b6af.appspot.com",
  messagingSenderId: "715491968596",
  appId: "1:715491968596:web:a4fb292f47712583dbcfc1",
  measurementId: "G-FN9TFD53BJ"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const analytics = getAnalytics(app);

export default firebaseConfig;
export { firestore };