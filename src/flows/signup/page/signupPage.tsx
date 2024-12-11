import styled from "styled-components";
import { NotLoggedInTopBar } from "../../../common/components/notLoggedInTopBar";
import {
  BackgroundImageContainerBase,
  ContentContainer,
  MainColumn,
  Page,
} from "../../../common/styledComponents";
import { SignupDetailsForm } from "../components/signupDetailsForm";
import { SignupPincodeForm } from "../components/signupPincodeForm";
import { useSignupState } from "../data/signupState";
import signupImage from "../assets/test.png";
import { useMemo } from "react";
import { SigninForm } from "../components/signinForm";

const TopBackgroundContainer = styled(BackgroundImageContainerBase)`
  background-image: url(${signupImage});
  height: 35vh;
  margin-bottom: 30px;
  background-position: 0vw -20vh;
  width: 80%;
`;

const BottomBackgroundContainer = styled(BackgroundImageContainerBase)`
  height: 35vh;
  justify-content: left;
  width: 80%;
`;

const SignupText = styled.div`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight: 800;
  font-style: normal;
  font-size: 40px;
  line-height: 50px;
  letter-spacing: -2px;
  width: 80%;
  color: black;
`;

const SignupContentContainer = styled(ContentContainer)`
  gap: 0px;
`;

export const SignupPage = ({ isSignUp = true }) => {
  const { signupDetails } = useSignupState();

  const formToShow = useMemo(() => {
    if (!isSignUp) {
      return <SigninForm />;
    }
    if (signupDetails.isSent) {
      return <SignupDetailsForm />;
    } else {
      return <SignupPincodeForm />;
    }
  }, [signupDetails.isSent, isSignUp]);

  const textToShow = useMemo(() => {
    if (!isSignUp) {
      return "Welcome back!";
    } else {
      return "Join our community";
    }
  }, [isSignUp]);

  return (
    <Page id="page-container">
      <MainColumn id="main-column">
        <NotLoggedInTopBar showSignup={!isSignUp} showSingin={isSignUp} />
        <SignupContentContainer id="content-container">
          <TopBackgroundContainer />
          <SignupText>{textToShow}</SignupText>
          <BottomBackgroundContainer>{formToShow}</BottomBackgroundContainer>
        </SignupContentContainer>
      </MainColumn>
    </Page>
  );
};
