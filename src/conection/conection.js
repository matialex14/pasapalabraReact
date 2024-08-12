// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: 'AIzaSyCjPyPjkCQtyEnS50xKqTobtODFn_5IiOk',
  authDomain: 'pasapalabradb.firebaseapp.com',
  projectId: 'pasapalabradb',
  storageBucket: 'pasapalabradb.appspot.com',
  messagingSenderId: '745309454217',
  appId: '1:745309454217:web:ebe8888b84eedf48c2eb58',
  measurementId: 'G-CQHM9HV49C',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();
