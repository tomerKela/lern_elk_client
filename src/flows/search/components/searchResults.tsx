import { Grid, Pagination } from "@mui/material";
import React from "react";
import { useSearchState } from "../data/serchState";
import { SearchResultCard } from "./searchResultCard";
import styled from "styled-components";

const SearchResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 100%;
  gap: 20px;
`;

const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const GridItem = styled.div`
  margin: 10px;
`;

export const SearchResults: React.FC = () => {
  const { searchResults } = useSearchState();
  const [currentPage, setCurrentPage] = React.useState(1);
  const resultsPerPage = 12;
  const totalPages = Math.ceil(
    searchResults.topicSummerys.length / resultsPerPage
  );

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * resultsPerPage;
  const endIndex = startIndex + resultsPerPage;
  const currentResults = searchResults.topicSummerys.slice(
    startIndex,
    endIndex
  );

  return (
    <SearchResultsContainer>
      <GridContainer>
        {currentResults.map((topic, index) => (
          <GridItem key={index}>
            <SearchResultCard data={topic} />
          </GridItem>
        ))}
      </GridContainer>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        color="primary"
      />
    </SearchResultsContainer>
  );
};
