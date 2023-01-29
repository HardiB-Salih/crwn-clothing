import { useState } from "react";
import { Navigate } from "react-router-dom";
import styled from "styled-components";
import {
  signInUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/formInput.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

const defaltFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setformFields] = useState(defaltFormFields);
  const [toDashboard, setToDashboard] = useState(false);
  const { email, password } = formFields;

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    if (user !== null) {
      setToDashboard(true);
    }
  };

  if (toDashboard === true) {
    return <Navigate to="/" />;
  }

  // console.log(formFields);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setformFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { user } = await signInUserWithEmailAndPassword(email, password);
      setformFields(defaltFormFields);
      if (user !== null) {
        setToDashboard(true);
      }
    } catch (err) {
      console.log("something went wrong", err.message);
    }
  };

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <ButtonsContainer>
          <Button type="submit">Sign In</Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            type="button"
            onClick={signInWithGoogle}
          >
            Google Sign In
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;

const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  h2 {
    margin: 10px 0;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
