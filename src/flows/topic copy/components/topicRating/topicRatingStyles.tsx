import { LinearProgress } from "@mui/material";
import styled from "styled-components";

const Header = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
  color: #1c170d;
  font-family: "Plus Jakarta Sans", sans-serif;
  margin-bottom: -1npm0px;
`;

const AverageRating = styled.div`
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 800;
  font-size: 36px;
  line-height: 45px;
  letter-spacing: -1px;
  margin-top: 10px;
  color: #1c170d;
`;

const RatingSummary = styled.div`
  display: flex;
  height: 185px;
  gap: 20px;
`;

const RatingAverageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 20px;
  width: 120px;
`;

const RatingDistributionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  width: 440px;
  color: #a1824a;
`;

const GreenProgressBar = styled(LinearProgress)({
  height: "8px!important",
  borderRadius: 5,
  backgroundColor: "#E8DECF!important", // gray background color
  width: "340px",
  marginX: 1,
  marginLeft: "20px",
  marginRight: "20px",
  marginTop: "10px",
  "& .MuiLinearProgress-bar": {
    borderRadius: 5,
    backgroundColor: "#009963", // green color
  },
});

export const TopicRatingStyles = {
  Header,
  AverageRating,
  RatingSummary,
  RatingAverageContainer,
  RatingDistributionContainer,
  GreenProgressBar,
};
