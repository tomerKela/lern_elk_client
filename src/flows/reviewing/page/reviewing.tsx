import { Modal } from "@mui/material";
import { Star, X } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(to bottom right, #e6f2ff, #e6e6ff);
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ReviewCard = styled.div`
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  max-width: 600px;
  width: 100%;
`;

const ReviewTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 1.5rem;
`;

const ReviewSections = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ReviewSection = styled.div`
  background-color: #f8f8f8;
  border-radius: 8px;
  padding: 1rem;
`;

const SectionTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #444;
  margin-bottom: 0.5rem;
`;

const DetailedRatings = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const RatingItem = styled.div`
  h4 {
    font-size: 0.9rem;
    font-weight: 500;
    color: #555;
    margin-bottom: 0.25rem;
  }
`;

const StyledStar = styled(Star)<{ filled: boolean }>`
  cursor: pointer;
  color: ${(props) => (props.filled ? "#fbbf24" : "#d1d5db")};
  transition: color 0.2s;

  &:hover {
    color: #fbbf24;
  }
`;

const CommentTextarea = styled.textarea`
  width: 100%;
  min-height: 100px;
  padding: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  resize: vertical;
`;

const SubmitButton = styled.button`
  background-color: #3b82f6;
  color: white;
  font-weight: 600;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #2563eb;
  }
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
`;

const ModalTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ModalMessage = styled.p`
  margin-bottom: 1.5rem;
`;

const BackToHomeButton = styled.button`
  background-color: #3b82f6;
  color: white;
  font-weight: 600;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #2563eb;
  }
`;

interface RatingStarsProps {
  value: number;
  onChange: (value: number) => void;
  name: string;
}

const RatingStars: React.FC<RatingStarsProps> = ({ value, onChange, name }) => {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => (
        <StyledStar
          key={star}
          size={24}
          filled={star <= value}
          onClick={() => onChange(star)}
        />
      ))}
    </div>
  );
};

interface Ratings {
  general: number;
  communication: number;
  helpfulness: number;
  consultantTime: number;
}

export const ReviewingPage: React.FC = () => {
  const navigate = useNavigate();
  const [ratings, setRatings] = useState<Ratings>({
    general: 0,
    communication: 0,
    helpfulness: 0,
    consultantTime: 0,
  });
  const [comment, setComment] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);

  const handleRatingChange = (category: keyof Ratings, value: number) => {
    setRatings((prev) => ({ ...prev, [category]: value }));
  };

  const handleSubmit = () => {
    console.log("Submitted:", { ratings, comment });
    setShowThankYou(true);
  };

  const handleCloseModal = () => {
    navigate("/home");
    setShowThankYou(false);
  };

  const handleBackToHome = () => {
    navigate("/home");
  };

  return (
    <PageContainer>
      <ReviewCard>
        <ReviewTitle>Review & Rating</ReviewTitle>

        <ReviewSections>
          <ReviewSection>
            <SectionTitle>General Rating</SectionTitle>
            <RatingStars
              value={ratings.general}
              onChange={(value) => handleRatingChange("general", value)}
              name="general-rating"
            />
          </ReviewSection>
          <ReviewSection>
            <SectionTitle>Detailed Ratings</SectionTitle>
            <DetailedRatings>
              {[
                { name: "Communication Skills", key: "communication" as const },
                {
                  name: "Helpfulness of Consulting",
                  key: "helpfulness" as const,
                },
                {
                  name: "Consultant Took Too Long",
                  key: "consultantTime" as const,
                },
              ].map((item) => (
                <RatingItem key={item.key}>
                  <h4>{item.name}</h4>
                  <RatingStars
                    value={ratings[item.key]}
                    onChange={(value) => handleRatingChange(item.key, value)}
                    name={`${item.key}-rating`}
                  />
                </RatingItem>
              ))}
            </DetailedRatings>
          </ReviewSection>
          <ReviewSection>
            <SectionTitle>Comment Section</SectionTitle>
            <CommentTextarea
              placeholder="Provide your feedback here..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </ReviewSection>
          <SubmitButton onClick={handleSubmit}>Submit Review</SubmitButton>{" "}
        </ReviewSections>
      </ReviewCard>

      {showThankYou && (
        <Modal
          open={showThankYou}
          onClose={handleCloseModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ModalContent>
            <CloseButton onClick={handleCloseModal}>
              <X size={24} />
            </CloseButton>
            <ModalTitle>Thank You!</ModalTitle>
            <ModalMessage>
              Your review has been submitted successfully.
            </ModalMessage>
            <BackToHomeButton onClick={handleBackToHome}>
              Back to Home
            </BackToHomeButton>
          </ModalContent>
        </Modal>
      )}
    </PageContainer>
  );
};
