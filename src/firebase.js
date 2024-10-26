import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/database'
import 'firebase/compat/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBn7RPaO5GRxq15TFopKeNr5n7fI71H47M",
  authDomain: "netflix-clone-e796b.firebaseapp.com",
  projectId: "netflix-clone-e796b",
  storageBucket: "netflix-clone-e796b.appspot.com",
  messagingSenderId: "876143659394",
  appId: "1:876143659394:web:65da2e0930bff8578fe79b",
  measurementId: "G-R96SFBQ4WV"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;