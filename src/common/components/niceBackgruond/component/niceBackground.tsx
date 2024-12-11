import React from "react";
import styled from "styled-components";
import { images } from "./assets";

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
  pointer-events: none;
  opacity: 0.6;
`;

const SideImage = styled.div<{ left?: boolean }>`
  position: absolute;
  top: 0;
  ${(props) => (props.left ? "left: 0;" : "right: 0;")}
  width: calc((100% - 1200px) / 2 + 40px); // Slight overlap
  height: 100%;
  overflow: hidden;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CutoutOverlay = styled.div<{ left?: boolean }>`
  position: absolute;
  top: 0;
  ${(props) => (props.left ? "right: 0;" : "left: 0;")}
  width: 80px;
  height: 100%;
  background-color: #ffffff; // Assuming white background for content
  clip-path: ${(props) =>
    props.left
      ? "polygon(100% 0, 0% 100%, 100% 100%)"
      : "polygon(0 0, 100% 100%, 0 100%)"};
`;

const ContentArea = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 1200px;
  height: 100%;
  background-color: #ffffff; // Assuming white background for content
`;

type ImageKey = keyof typeof images;

const getRandomImage = (): string => {
  const keys = Object.keys(images) as ImageKey[];
  const randomKey = keys[Math.floor(Math.random() * keys.length)];
  return images[randomKey];
};

export const NiceBackground: React.FC = () => {
  const leftImage = getRandomImage();
  const rightImage = getRandomImage();

  return (
    <BackgroundContainer>
      <SideImage left>
        <StyledImage src={leftImage} alt="Left background" />
        <CutoutOverlay left />
      </SideImage>
      <ContentArea />
      <SideImage>
        <StyledImage src={rightImage} alt="Right background" />
        <CutoutOverlay />
      </SideImage>
    </BackgroundContainer>
  );
};
