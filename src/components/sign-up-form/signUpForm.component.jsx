import { useState } from "react";
import { Navigate } from "react-router-dom";
import styled from "styled-components";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/formInput.component";

const defaltFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [toDashboard, setToDashboard] = useState(false);
  const [formFields, setformFields] = useState(defaltFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  // console.log(formFields);
  const handleChanges = (event) => {
    const { name, value } = event.target;
    setformFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(email);
    if (password !== confirmPassword) {
      alert("password do not match");
      return;
    } else {
      try {
        const { user } = await createAuthUserWithEmailAndPassword(
          email,
          password
        );
        await createUserDocumentFromAuth(user, { displayName });
        if (user !== null) {
          setToDashboard(true);
        }
        setformFields(defaltFormFields);
      } catch (err) {
        console.log("something went wrong", err.message);
      }
    }
  };

  if (toDashboard === true) {
    return <Navigate to="/" />;
  }

  return (
    <Wrapper>
      <h2>Dont have an account</h2>
      <span>Sign Up With email and password</span>
      <Form onSubmit={handleSubmit}>
        <FormInput
          lable="Display Name"
          type="text"
          required
          onChange={handleChanges}
          name="displayName"
          value={displayName}
        />
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
        <FormInput
          lable="Confirm Password"
          type="password"
          required
          onChange={handleChanges}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit">Sign Up</Button>
      </Form>
    </Wrapper>
  );
};

export default SignUpForm;

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
