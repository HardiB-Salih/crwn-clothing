import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0fjnK2fopBW7cyJaKn5Y4XiiSrl2V_3s",
  authDomain: "crown-clothing-db-4986b.firebaseapp.com",
  projectId: "crown-clothing-db-4986b",
  storageBucket: "crown-clothing-db-4986b.appspot.com",
  messagingSenderId: "370633326379",
  appId: "1:370633326379:web:d18ed3b6972c7d656d8f6e",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

//Auth with google
const provider = new GoogleAuthProvider();
provider.getCustomParameters({
  prompt: "select_account",
});
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  //   console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  //   console.log(userSnapshot);
  //   console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
      });
    } catch (error) {
      console.log("user did not create", error.message);
    }
  }

  return userDocRef;
};
