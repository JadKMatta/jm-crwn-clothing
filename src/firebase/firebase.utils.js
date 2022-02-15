import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyA4n_ZleC5rkKBs0xjdMpcjrR9HGTP_gOo",

  authDomain: "jm-crwn-db-f888d.firebaseapp.com",

  projectId: "jm-crwn-db-f888d",

  storageBucket: "jm-crwn-db-f888d.appspot.com",

  messagingSenderId: "725756684218",

  appId: "1:725756684218:web:2e27283777bfa57111df83",

  measurementId: "G-D8DCBGKDWS",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
