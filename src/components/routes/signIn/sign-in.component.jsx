import React from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    const userDoc = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>SignIn</h1>
      <button onClick={logWithGoogle}>sign in with google yoooo</button>
    </div>
  );
};

export default SignIn;
