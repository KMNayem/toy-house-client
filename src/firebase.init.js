// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import {getAuth} from 'firebase/auth';
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // const firebaseConfig = {

//   const firebaseConfig = {
//     apiKey: "AIzaSyDOu3TZJSzKFg_h5jt7JisGwPANxsJ-wkY",
//     authDomain: "toy-house-b1a2d.firebaseapp.com",
//     projectId: "toy-house-b1a2d",
//     storageBucket: "toy-house-b1a2d.appspot.com",
//     messagingSenderId: "168035248177",
//     appId: "1:168035248177:web:9db2001df3e7b2b31c4d10"
//   };

//   // apiKey: process.env.REACT_APP_apiKey,
//   // authDomain: process.env.REACT_APP_authDomain,
//   // projectId: process.env.REACT_APP_projectId,
//   // storageBucket:process.env.REACT_APP_storageBucket,
//   // messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   // appId: process.env.REACT_APP_appId
// // };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOu3TZJSzKFg_h5jt7JisGwPANxsJ-wkY",
  authDomain: "toy-house-b1a2d.firebaseapp.com",
  projectId: "toy-house-b1a2d",
  storageBucket: "toy-house-b1a2d.appspot.com",
  messagingSenderId: "168035248177",
  appId: "1:168035248177:web:9db2001df3e7b2b31c4d10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;