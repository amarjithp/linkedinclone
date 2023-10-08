import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDOOVS-z1nzcl-_Gper6OIZWvHin1ofMmo",
    authDomain: "linkedin-clone-b8855.firebaseapp.com",
    projectId: "linkedin-clone-b8855",
    storageBucket: "linkedin-clone-b8855.appspot.com",
    messagingSenderId: "742364704205",
    appId: "1:742364704205:web:c950eed1ffdec62551a884"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth};