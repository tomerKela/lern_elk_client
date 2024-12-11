import styled from "styled-components";

const Lander = styled.div`
  height: calc(100vh - 64px);
  width: 100vw;
  max-width: 100%;
  max-height: 100%;
`;

const MainColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  max-height: 100%;
  width: 1280px;
  overflow-y: scroll;
  margin: 0 auto;
`;

const MetaDataContainer = styled.div`
  width: 928px;
  margin-top: 6vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 20px;
  flex: none;
  order: 0;
`;

const TopicHeader = styled.div`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
  color: #1c170d;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;

const TeacherImage = styled.img`
  width: 128px;
  height: 128px;
  min-height: 128px;
  border-radius: 12px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const RatingContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 928px;
  margin-top: 25px;
`;

const AvailabilityContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 928px;
  /* border: 1px solid black; */
  margin-bottom: 50px;
`;

const TeacherName = styled.div`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
  color: #1c170d;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;

const DescriptionText = styled.div`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #a1824a;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;

const HourlyRate = styled.div`
  padding: 20px 0px;
  height: 83px;
  border-top: 2px solid #e6e8eb;
  flex: 1;
`;

const MinimumMinutes = styled.div`
  padding: 20px 0px;
  height: 83px;
  border-top: 2px solid #e6e8eb;
  flex: 6;
`;

const HardDetailsContainer = styled.div`
  /* Depth 5, Frame 0 */

  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;

  width: 928px;
  height: 83px;

  /* Inside auto layout */
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 1;
`;

export const TopicPageComponents = {
  Lander,
  MainColumn,
  MetaDataContainer,
  TopicHeader,
  RatingContainer,
  AvailabilityContainer,
  TeacherImage,
  TeacherName,
  DescriptionText,
  HardDetailsContainer,
  HourlyRate,
  MinimumMinutes,
};
