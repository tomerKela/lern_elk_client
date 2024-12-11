import styled from "styled-components";

import "@fontsource-variable/public-sans";
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  BackgroundImageContainerBase,
  ContentContainer,
  MainColumn,
  Page,
} from "../../common/styledComponents";
import landingButtonBackground from "./assets/landingButtonBackground.png";
import landingTopBackground from "./assets/landingTopBackground.png";
import { NotLoggedInTopBar } from "../../common/components/notLoggedInTopBar";

const TopBackgroundContainer = styled(BackgroundImageContainerBase)`
  background-image: url(${landingTopBackground});
  align-items: end;
`;

const BottomBackgroundContainer = styled(BackgroundImageContainerBase)`
  background-image: url(${landingButtonBackground});
`;

const LandingText = styled.div`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight: 800;
  font-style: normal;
  font-size: 60px;
  line-height: 76px;
  text-align: center;
  letter-spacing: -2px;
  width: 80%;
  margin: 20px;
  color: #ffffff;
`;

export const LandingPage: React.FC = () => {
  return (
    <Page id="page-container">
      <MainColumn id="main-column">
        <NotLoggedInTopBar />
        <ContentContainer id="content-container">
          <TopBackgroundContainer id="top-background-container">
            <LandingText id="landing-text-1">
              Welcome to the Consultant Community Marketplace
            </LandingText>
          </TopBackgroundContainer>
          <BottomBackgroundContainer id="bottom-background-container">
            <LandingText id="landing-text-2">
              Discover the Perfect Consultant <br /> for Anything You Need
            </LandingText>
          </BottomBackgroundContainer>
        </ContentContainer>
      </MainColumn>
    </Page>
  );
};
