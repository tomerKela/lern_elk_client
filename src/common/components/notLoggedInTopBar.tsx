import styled from "styled-components";
import logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import { ActionButtonBase } from "../styledComponents";
import { useMemo } from "react";

const TopBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2vh;
  height: 6vh;
  justify-content: space-between;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 200px;
  height: 100%;
`;

const Logo = styled.div`
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 150px;
  height: 100%;
`;

const ActionButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 300px;
  height: 100%;
  gap: 30px;
  align-items: center;
  justify-content: end;
`;

const SignUpButton = styled(ActionButtonBase)`
  color: #121417;
  background-color: #f0f2f5;
`;

const SignInButton = styled(ActionButtonBase)``;

const NotLoggedInTopBarButtons = ({ showSignup = true, showSingin = true }) => {
  const navigete = useNavigate();

  const SigninButton = useMemo(() => {
    if (!showSingin) return;
    const ButtonStyle = showSignup ? SignInButton : SignUpButton;
    return (
      <ButtonStyle
        id="sign-in-button"
        onClick={() => {
          navigete("/signin");
        }}
      >
        Sign In
      </ButtonStyle>
    );
  }, [showSignup]);

  return (
    <ActionButtonsContainer id="action-buttons-container">
      {showSignup && (
        <SignUpButton
          id="sign-up-button"
          onClick={() => {
            navigete("/signup");
          }}
        >
          Sign Up
        </SignUpButton>
      )}
      {SigninButton}
    </ActionButtonsContainer>
  );
};

export const NotLoggedInTopBar = ({ showSignup = true, showSingin = true }) => {
  return (
    <TopBarContainer id="top-bar-container">
      <LogoContainer id="logo-container">
        <Logo id="logo" />
      </LogoContainer>
      <NotLoggedInTopBarButtons
        showSignup={showSignup}
        showSingin={showSingin}
      />
    </TopBarContainer>
  );
};
