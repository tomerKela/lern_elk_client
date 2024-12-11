import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { TopicSummery, useSearchState } from "../data/serchState";
import { Avatar, Rating } from "@mui/material";
import { Clock, DollarSign, Star } from "lucide-react";

const StyledCard = styled.div`
  max-width: 270px;
  height: 420px;
  margin: auto;
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  position: relative;
  background-color: white;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const CardMedia = styled.div`
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
`;

const StyledAvatar = styled(Avatar)`
  width: 100px !important;
  height: 100px !important;
  border: 3px solid white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CardContent = styled.div`
  padding: 16px;
`;

const CardTitle = styled.h3`
  font-size: 18px;
  height: 54px;
  margin: 0 0 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const CardDescription = styled.p`
  font-size: 14px;
  color: #666;
  height: 60px;
  margin: 0 0 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const CardFooter = styled.div`
  position: absolute;
  bottom: 16px;
  left: 16px;
  right: 16px;
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  font-size: 14px;
  color: #555;
`;

const IconWrapper = styled.span`
  margin-right: 8px;
  display: flex;
  align-items: center;
`;

export const SearchResultCard: React.FC<{ data: TopicSummery }> = ({
  data,
}) => {
  const navigate = useNavigate();
  const { setChosenTopic } = useSearchState();

  const handleClick = () => {
    setChosenTopic(data);
    navigate("/topic");
  };

  const {
    description,
    teacher: { profilePictureUrl, firstName, lastName },
    name,
    hourlyRate,
    averageRating,
    numberOfRatings,
    minimalMinutes,
  } = data;

  return (
    <StyledCard onClick={handleClick}>
      <CardMedia>
        <StyledAvatar
          src={profilePictureUrl}
          alt={`${firstName} ${lastName}`}
        />
      </CardMedia>
      <CardContent>
        <CardTitle>
          {name} | {firstName} {lastName}
        </CardTitle>
        <CardDescription>
          {description.length > 100
            ? `${description.slice(0, 100)}...`
            : description}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <InfoRow>
          <IconWrapper>
            <Star size={16} />
          </IconWrapper>
          <Rating
            name="read-only"
            value={averageRating}
            readOnly
            precision={0.1}
            size="small"
          />
          <span style={{ marginLeft: "8px" }}>({numberOfRatings})</span>
        </InfoRow>
        <InfoRow>
          <IconWrapper>
            <DollarSign size={16} />
          </IconWrapper>
          ${hourlyRate.toFixed(2)} / hour
        </InfoRow>
        <InfoRow>
          <IconWrapper>
            <Clock size={16} />
          </IconWrapper>
          Min. {minimalMinutes} minutes
        </InfoRow>
      </CardFooter>
    </StyledCard>
  );
};
