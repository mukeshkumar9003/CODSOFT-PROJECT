import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// import { initializeApp } from "firebase/app";
import { getEvn } from "./getEnv";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: getEvn('VITE_FIREBASE_API'),
//     authDomain: "yt-mern-blog.firebaseapp.com",
//     projectId: "yt-mern-blog",
//     storageBucket: "yt-mern-blog.firebasestorage.app",
//     messagingSenderId: "150248092393",
//     appId: "1:150248092393:web:34bc9843d732ee4be7f678"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// const auth = getAuth(app)





// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: getEvn('VITE_FIREBASE_API'),
  authDomain: "blogging-72011.firebaseapp.com",
  projectId: "blogging-72011",
  storageBucket: "blogging-72011.firebasestorage.app",
  messagingSenderId: "47879243736",
  appId: "1:47879243736:web:04094d6e965e940fe9d4ad",
  measurementId: "G-P46Z1GBYR4"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export { auth, provider }