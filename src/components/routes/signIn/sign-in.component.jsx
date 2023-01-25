import styled from "styled-components";
import SignUpForm from "../../sign-up-form/signUpForm.component";
import SignInForm from "../sign-in-form/signin-form.component";

const SignIn = () => {
  return (
    <Wrapper>
      <SignInForm />
      <SignUpForm />
    </Wrapper>
  );
};

export default SignIn;

const Wrapper = styled.div`
  max-width: 900px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, auto));
  gap: 5px;
  margin: 0 auto;
  place-content: center;
`;
