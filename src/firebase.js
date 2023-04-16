import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDfHRRXjVYomYqgwSIrFKKF-Y5Xk7QmtiU",
    authDomain: "tiendainstrumentos.firebaseapp.com",
    projectId: "tiendainstrumentos",
    storageBucket: "tiendainstrumentos.appspot.com",
    messagingSenderId: "420302206585",
    appId: "1:420302206585:web:50910b9f0be9a0f3ad86a8",
    measurementId: "G-7SECFEGC5T"
  };

// Inicializar el proyecto de Firebase
firebase.initializeApp(firebaseConfig);


// Exportar las instancias de los servicios que vas a utilizar en tu aplicación de Vue
export const auth = firebase.auth();
export const db = firebase.firestore();
export const app = firebase.app();
export default firebase;