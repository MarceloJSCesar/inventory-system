import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

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
let firestore = null;
let app = null;

if (!getApps().length) {
  app = initializeApp(firebaseConfig);
  firestore = getFirestore(app);
}

export default firebaseConfig;
export { firestore, app };

// Client-side-only code
export const initializeAnalytics = () => {
  if (typeof window !== 'undefined') {
    import('firebase/analytics').then(({ getAnalytics }) => {
      getAnalytics(app);
    });
  }
};