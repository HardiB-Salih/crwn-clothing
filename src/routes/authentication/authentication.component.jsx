import styled from "styled-components";
import SignInForm from "../../components/sign-in-form/signin-form.component";
import SignUpForm from "../../components/sign-up-form/signUpForm.component";

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
