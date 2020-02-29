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
  // we take the user and any other data we may need and storet in the database 
  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    //we use the snapShot to serach in the database for the user 
    const snapShot = await userRef.get();

    // if we did not find the user in our database 
    // create a user with field specified here which we will take form the authenticated user reference (userAuth)
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  return userRef;

  } 
  

  firebase.initializeApp(config);
  console.log(firebase.app().name);
   
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
   
  // provides access to the GoogleAuthProvider class from authentication library
  const provider = new firebase.auth.GoogleAuthProvider();
   
  // set custom parameters for signin popup
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;
