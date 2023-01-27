import { useState } from "react";
import { Navigate } from "react-router-dom";
import { GoogleLoginButton } from "react-social-login-buttons";
import styled from "styled-components";
import {
  createUserDocumentFromAuth,
  signInUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../../utils/firebase/firebase.utils";
import FormInput from "../../form-input/formInput.component";

const defaltFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setformFields] = useState(defaltFormFields);
  const [toDashboard, setToDashboard] = useState(false);
  const { email, password } = formFields;

  const logWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    const userDoc = await createUserDocumentFromAuth(user);
  };

  if (toDashboard === true) {
    return <Navigate to="/" />;
  }

  // console.log(formFields);
  const handleChanges = (event) => {
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
    <Wrapper>
      <h2>i have an account</h2>
      <span>Sign In With email and password</span>
      <Form onSubmit={handleSubmit}>
        <FormInput
          lable="Email"
          type="email"
          required
          onChange={handleChanges}
          name="email"
          value={email}
        />
        <FormInput
          lable="Password"
          type="password"
          required
          onChange={handleChanges}
          name="password"
          value={password}
        />
        <Button type="submit">Sign Up</Button>
        <GoogleLoginButton onClick={logWithGoogle} />
      </Form>
    </Wrapper>
  );
};

export default SignInForm;

const Wrapper = styled.div`
  width: 380px;
  padding: 20px;
  margin: 20px;
  text-align: center;
  background: rgba(0, 0, 0, 0.1);
  border: 0.5px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(20px);
  border-radius: 20px;
`;
const Form = styled.form`
  display: grid;
  justify-content: center;
  gap: 20px;
  padding: 10px;
`;

const Button = styled.button`
  width: 250px;
  background: linear-gradient(91.4deg, #2fb8ff 0%, #9eecd9 100%);
  padding: 12px 0;
  border: none;
  border-radius: 30px;
  color: white;
  font-weight: bold;
  font-family: Segoe UI, sans-serif;
  cursor: pointer;
  :focus {
    outline: none;
  }
`;
