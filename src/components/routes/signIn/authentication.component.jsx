import styled from "styled-components";
import SignUpForm from "../../sign-up-form/signUpForm.component";
import SignInForm from "../sign-in-form/signin-form.component";

const Authentication = () => {
  return (
    <Wrapper>
      <SignInForm />
      <SignUpForm />
    </Wrapper>
  );
};

export default Authentication;

const Wrapper = styled.div`
  max-width: 900px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;
`;
