import { initializeApp, FirebaseApp } from "firebase/app";
import { getAuth, Auth, GoogleAuthProvider, connectAuthEmulator } from "firebase/auth";
import { getFirestore, Firestore, connectFirestoreEmulator } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCjyHraj_I3RtDtPKfO83E1u-nU6pUbgkE",
  authDomain: "ewalletnicklookup.firebaseapp.com",
  projectId: "ewalletnicklookup",
  storageBucket: "ewalletnicklookup.firebasestorage.app",
  messagingSenderId: "11054307402",
  appId: "1:11054307402:web:6e89218d238cd25b4deeb3",
  measurementId: "G-XNJ14P9KM1"
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth: Auth = getAuth(app);

// Initialize Google Auth Provider
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

// Initialize Cloud Firestore and get a reference to the service
export const db: Firestore = getFirestore(app);

// Enable offline persistence
// enableIndexedDbPersistence(db).catch((err) => {
//   if (err.code === 'failed-precondition') {
//     console.warn('Multiple tabs open, persistence can only be enabled in one tab at a time.');
//   } else if (err.code === 'unimplemented') {
//     console.warn('The current browser does not support persistence.');
//   }
// });

export default app; 