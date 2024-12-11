import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
`;

export const MainColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
  height: 100%;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90vh;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 30px 0;
  /* padding: 50px; */
`;

export const BackgroundImageContainerBase = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  display: flex;
  justify-content: center;
`;

export const ActionButtonBase = styled.button`
  width: 100px;
  height: 50px;
  border: none;
  border-radius: 12px;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 21px;
  text-align: center;
  color: #ffffff;
  background-color: #1a80e6;
`;

export const FormButton = styled(ActionButtonBase)`
  width: 100px;
`;
