// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2YvwfQEcQHocStkPhsaNFsEFFTfEg5Xc",
  authDomain: "krzmusic-4d.firebaseapp.com",
  projectId: "krzmusic-4d",
  storageBucket: "krzmusic-4d.appspot.com",
  messagingSenderId: "269030691224",
  appId: "1:269030691224:web:d62e162bd3b396832adbed",
  measurementId: "G-XSHJH0KP4R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// rules_version = '2';

// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read, write: if false;
//     }
//   }
// }


// {
//     "rules": {
//       ".read": false,
//       ".write": false
//     }
//   }