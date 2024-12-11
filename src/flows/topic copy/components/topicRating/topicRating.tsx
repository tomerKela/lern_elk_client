import DropDownIcon from "@mui/icons-material/ArrowDropDownCircle";
import DropUpIcon from "@mui/icons-material/ArrowDropUpOutlined";
import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import emptyStar from "../../assets/emptyStar.png";
import star from "../../assets/star.png";
import {
  TopicReview,
  useCurrentTopicState,
} from "../../data/currentTopicState";
import { TopicRatingStyles } from "./topicRatingStyles";

const {
  Header,
  AverageRating,
  RatingSummary,
  RatingAverageContainer,
  RatingDistributionContainer,
  GreenProgressBar,
} = TopicRatingStyles;

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
    <Box>
      <Header>Ratings</Header>

      <RatingSummary>
        <RatingAverageContainer>
          <AverageRating>{averageRating.toFixed(1)}</AverageRating>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignContent: "start",
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
          </div>
          <div>({totalReviews} reviews)</div>
        </RatingAverageContainer>
        <RatingDistributionContainer>
          {ratingDistribution.map((dist, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "row",
                alignContent: "start",
              }}
            >
              <div style={{ width: "20px" }}>{dist.stars}</div>

              <GreenProgressBar variant="determinate" value={dist.percentage} />

              <div>{dist.percentage.toFixed(0)}%</div>
            </div>
          ))}
        </RatingDistributionContainer>
        <div style={{ display: "flex", marginLeft: "30px" }}>
          <button onClick={() => setShowReviews(!showReviews)}>
            {showReviews ? (
              <DropUpIcon
                style={{
                  width: "40px",
                  height: "40px",
                  color: "#009963",
                  border: "1px solid #009963",
                  borderRadius: "50%",
                }}
              />
            ) : (
              <DropDownIcon
                style={{
                  width: "40px",
                  height: "40px",
                  color: "#009963",
                }}
              />
            )}
          </button>
        </div>
      </RatingSummary>
      {showReviews && (
        <div
          style={{
            display: "grid",
            gap: "10px",
            padding: "20px",
            border: "1px solid #009963",
            borderRadius: "10px",
            //3 in a row
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          }}
        >
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>
      )}
    </Box>
  );
};

const ReviewCard: React.FC<{ review: TopicReview }> = ({ review }) => {
  const { comment, date, rating, user } = review;
  const { firstName, lastName, profilePictureUrl } = user;
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "10px",
        borderBottom: "1px solid #009963",
        paddingBottom: "10px",
      }}
    >
      <img
        src={profilePictureUrl}
        alt="profile"
        style={{ width: "50px", height: "50px", borderRadius: "50%" }}
      />
      <div>
        <div>
          {firstName} {lastName}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignContent: "start",
          }}
        >
          {[1, 2, 3, 4, 5].map((starRating) => (
            <img
              key={starRating}
              src={starRating <= rating ? star : emptyStar}
              alt="star"
              style={{ width: "20px" }}
            />
          ))}
        </div>
        <div>{comment}</div>
        <div>{new Date(date).toLocaleDateString()}</div>
      </div>
    </Box>
  );
};
