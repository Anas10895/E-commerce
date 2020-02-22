import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyANnDAvhUlHtKvt7s1e8YvxE5NjvB-klK0",
    authDomain: "e-commerce-30cfe.firebaseapp.com",
    databaseURL: "https://e-commerce-30cfe.firebaseio.com",
    projectId: "e-commerce-30cfe",
    storageBucket: "e-commerce-30cfe.appspot.com",
    messagingSenderId: "355485720829",
    appId: "1:355485720829:web:f28eeae381b84bec485e94",
    measurementId: "G-J2VYZBGDKK"
  };
  firebase.initializeApp(config);
  console.log(firebase.app().name);
   
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
   
  // provides access to the GoogleAuthProvider class from authentication library
  const provider = new firebase.auth.GoogleAuthProvider();
   
  // set custom parameters for signin popup
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
   
  export default firebase;
