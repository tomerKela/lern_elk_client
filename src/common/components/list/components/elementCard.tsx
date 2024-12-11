import styled from "@emotion/styled";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Box,
  Collapse,
} from "@mui/material";
import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { ListElementPops } from "../data";

const StyledCard = styled(Card)`
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }
`;

const CardHeader = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderContent = styled(Box)`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-grow: 1;
`;

const HeaderImage = styled.img`
  border-radius: 50%;
  width: 60px;
  height: 60px;
  object-fit: cover;
`;

const HeaderText = styled(Box)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const HeaderActions = styled(Box)`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ExpandButton = styled(IconButton)`
  color: #1a73e8;
`;

const ActionButtonsWrapper = styled(Box)`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
`;

export const ElementCard = <T extends Record<string, any>>({
  ElementExtension,
  data,
  ActionButtons,
  hideExpandButton = true,
}: ListElementPops<T>): React.ReactElement => {
  const { imageUrl, header, secondHeader, description } = data;

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const renderExpandButton = () => (
    <ExpandButton onClick={handleExpandClick} size="large">
      {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
    </ExpandButton>
  );

  return (
    <StyledCard>
      <CardContent>
        <CardHeader>
          <HeaderContent>
            {imageUrl && <HeaderImage src={imageUrl} alt={header} />}
            <HeaderText>
              <Typography variant="h6" fontWeight="bold">
                {header}
              </Typography>
              {secondHeader && (
                <Typography variant="body2" color="textSecondary">
                  {secondHeader}
                </Typography>
              )}
            </HeaderText>
          </HeaderContent>
          <HeaderActions>
            {!ActionButtons && !hideExpandButton && renderExpandButton()}
          </HeaderActions>
        </CardHeader>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Box mt={2}>
            <Typography variant="body2" paragraph>
              {description}
            </Typography>
            {ElementExtension && (
              <ElementExtension data={data.additionalData} />
            )}
          </Box>
        </Collapse>

        {ActionButtons && (
          <ActionButtonsWrapper>
            <ActionButtons data={data.additionalData} />
            {!hideExpandButton && renderExpandButton()}
          </ActionButtonsWrapper>
        )}
      </CardContent>
    </StyledCard>
  );
};
