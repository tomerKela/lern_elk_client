import {
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Paper,
  Slider,
  Typography,
} from "@mui/material";
import { Calendar } from "../../../common/components/clendar/demo-app";
import { useCurrentTopicState } from "../data/currentTopicState";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSearchState } from "../../search/data/serchState";
import { mockTopicAvalabilities, mockTopicRatings } from "../mock/mockTopic";
import { TopicPageComponents } from "../components/styledComponents";
import { SpaceBar } from "@mui/icons-material";
import { RatingsComponent } from "../components/topicRating/topicRating";

const {
  MainColumn,
  AvailabilityContainer,
  Lander,
  MetaDataContainer,
  RatingContainer,
  TeacherImage,
  TeacherName,
  DescriptionText,
  TopicHeader,
  HardDetailsContainer,
  HourlyRate,
  MinimumMinutes,
} = TopicPageComponents;

interface RatingOption {
  rating: number;
  count: number;
}

const initialRatingOptions: RatingOption[] = [
  { rating: 1, count: 0 },
  { rating: 2, count: 0 },
  { rating: 3, count: 0 },
  { rating: 4, count: 0 },
  { rating: 5, count: 0 },
];

export const TopicPage: React.FC = () => {
  const navigate = useNavigate();
  const { setMetaData, metaData, setAvailability, setRatings } =
    useCurrentTopicState();
  const { chosenTopic } = useSearchState();

  /* LOAD FROM CLICKED CARD STATE */
  useEffect(() => {
    if (!chosenTopic) {
      navigate("/search");
      return;
    }
    const {
      ID,
      averageRating,
      description,
      hourlyRate,
      name,
      teacher,
      minimalMinutes,
    } = chosenTopic;
    setMetaData({
      extendedDescription: description,
      hourlyRate,
      ID,
      name,
      teacher,
      minimalMinutes,
    });
    setRatings({
      averageRating,
      data: [],
    });
  }, [chosenTopic, navigate, setMetaData, setRatings]);

  /* FETCH */
  useEffect(() => {
    // fetch availability, ratings and all of the topic details
    console.log("fetching availability");
    setAvailability(mockTopicAvalabilities);
    setRatings(mockTopicRatings);
  }, [setAvailability, setRatings]);

  const [expanded, setExpanded] = useState(false);
  const [ratingOptions, setRatingOptions] = useState(initialRatingOptions);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <Lander>
      <MainColumn>
        <MetaDataContainer>
          <TeacherImage src={metaData.teacher.profilePictureUrl} />
          <div>
            <TeacherName>
              {metaData.teacher.firstName} {metaData.teacher.lastName}
            </TeacherName>
            <DescriptionText>
              <u>about me</u>: <></>
              {metaData.teacher.description}
            </DescriptionText>
          </div>
          <div>
            <TopicHeader>Topic: {metaData.name}</TopicHeader>
            <DescriptionText>{metaData.extendedDescription}</DescriptionText>
          </div>
          <div>
            <HardDetailsContainer>
              <HourlyRate>
                <DescriptionText>Hourly Rate:</DescriptionText>
                <DescriptionText style={{ color: "black" }}>
                  ${metaData.hourlyRate}
                </DescriptionText>
              </HourlyRate>
              <MinimumMinutes>
                <DescriptionText>Minimum Minutes:</DescriptionText>
                <DescriptionText style={{ color: "black" }}>
                  {metaData.minimalMinutes}
                </DescriptionText>
              </MinimumMinutes>
            </HardDetailsContainer>
          </div>
        </MetaDataContainer>
        <RatingContainer>
          <RatingsComponent />
        </RatingContainer>
        {/* <AvailabilityContainer>
          <Calendar />
        </AvailabilityContainer> */}
      </MainColumn>
    </Lander>
  );
};
