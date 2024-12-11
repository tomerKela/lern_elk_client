import DropDownIcon from "@mui/icons-material/ArrowDropDownCircle";
import DropUpIcon from "@mui/icons-material/ArrowDropUpOutlined";
import { Box, Button, Typography, Avatar } from "@mui/material";
import React, { useState } from "react";
import emptyStar from "../../assets/emptyStar.png";
import star from "../../assets/star.png";
import {
  TopicReview,
  useCurrentTopicState,
} from "../../data/currentTopicState";
import { TopicRatingStyles } from "./topicRatingStyles";
import { TopicPageComponents } from "../styledComponents";

const {
  Header,
  AverageRating,
  RatingSummary,
  RatingAverageContainer,
  RatingDistributionContainer,
  GreenProgressBar,
} = TopicRatingStyles;

const { DescriptionText } = TopicPageComponents;

export const RatingsComponent: React.FC = () => {
  const { ratings } = useCurrentTopicState();
  const [showReviews, setShowReviews] = useState(false);

  const reviews = ratings.data;
  const totalReviews = reviews.length;
  const averageRating =
    reviews.reduce((acc, review) => acc + review.rating, 0) / totalReviews;

  const ratingDistribution = Array(5)
    .fill(0)
    .map((_, i) => {
      const stars = 5 - i;
      const count = reviews.filter((review) => review.rating === stars).length;
      const percentage = (count / totalReviews) * 100;
      return { stars, percentage };
    });

  return (
    <Box sx={{ fontFamily: "Arial, sans-serif" }}>
      <Header>Ratings</Header>

      <RatingSummary>
        <RatingAverageContainer>
          <AverageRating>{averageRating.toFixed(1)}</AverageRating>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 1,
            }}
          >
            {[1, 2, 3, 4, 5].map((starRating) => (
              <img
                key={starRating}
                src={starRating <= averageRating ? star : emptyStar}
                alt="star"
                style={{ width: "20px" }}
              />
            ))}
          </Box>
          <Typography variant="body2">({totalReviews} reviews)</Typography>
        </RatingAverageContainer>
        <RatingDistributionContainer>
          {ratingDistribution.map((dist, index) => (
            <Box
              key={index}
              sx={{ display: "flex", alignItems: "center", gap: 1 }}
            >
              <Typography variant="body2" sx={{ width: 20 }}>
                {dist.stars}
              </Typography>
              <GreenProgressBar variant="determinate" value={dist.percentage} />
              <Typography variant="body2">
                {dist.percentage.toFixed(0)}%
              </Typography>
            </Box>
          ))}
        </RatingDistributionContainer>
        <Box sx={{ display: "flex", marginLeft: "30px" }}>
          <Button
            onClick={() => setShowReviews(!showReviews)}
            sx={{
              minWidth: "auto",
              padding: 0,
              "&:hover": { backgroundColor: "transparent" },
            }}
          >
            {showReviews ? (
              <DropUpIcon
                sx={{
                  width: 40,
                  height: 40,
                  color: "#009963",
                  // border: "1px solid #009963",
                  borderRadius: "50%",
                }}
              />
            ) : (
              <DropDownIcon
                sx={{
                  width: 40,
                  height: 40,
                  color: "#009963",
                }}
              />
            )}
          </Button>
        </Box>
      </RatingSummary>
      {showReviews && <ReviewsContainer reviews={reviews} />}
    </Box>
  );
};

const ReviewsContainer: React.FC<{ reviews: TopicReview[] }> = ({
  reviews,
}) => (
  <Box
    sx={{
      display: "grid",
      gap: 3,
      padding: 3,
      // border: "1px solid #009963",
      borderRadius: 2,
      gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
      bgcolor: "#f5f5f5",
      maxHeight: "500px",
      overflowY: "auto",
      mb: 10,
    }}
  >
    {reviews.map((review, index) => (
      <ReviewCard key={index} review={review} />
    ))}
  </Box>
);

const ReviewCard: React.FC<{ review: TopicReview }> = ({ review }) => {
  const { comment, date, rating, user } = review;
  const { firstName, lastName, profilePictureUrl } = user;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        bgcolor: "white",
        borderRadius: 2,
        padding: 2,
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Avatar src={profilePictureUrl} alt={`${firstName} ${lastName}`} />
          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
              {firstName} {lastName}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {new Date(date).toLocaleDateString()}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {[1, 2, 3, 4, 5].map((starRating) => (
            <img
              key={starRating}
              src={starRating <= rating ? star : emptyStar}
              alt="star"
              style={{ width: "16px" }}
            />
          ))}
        </Box>
      </Box>
      <DescriptionText>{comment}</DescriptionText>
    </Box>
  );
};
