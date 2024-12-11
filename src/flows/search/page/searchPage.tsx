import { useEffect } from "react";
import styled from "styled-components";
import { FilterSideBar } from "../components/filtersSideBar";
import { SearchResults } from "../components/searchResults";
import { useSearchState } from "../data/serchState";
import { mockLandingSearchResults } from "../mock/mockResults";
import SearchIcon from "@mui/icons-material/Search";
import { Button, TextField } from "@mui/material";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { mockSearchResults } from "../mock/mockResults";
import { images } from "../../../common/components/niceBackgruond/component/assets";

const PageWrapper = styled.div`
  display: flex;
  height: calc(100vh - 64px);
  background-color: #f0f2f5;
  overflow: hidden;
`;

const BackgroundSide = styled.div`
  flex: 1;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: brightness(0.8);
  transition: background-image 0.5s ease-in-out;

  &:first-child {
    background-image: url(${images.n1});
  }

  &:last-child {
    background-image: url(${images.n2});
  }
`;

const ContentContainer = styled.div`
  flex: 4;
  max-width: 1400px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.15);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: linear-gradient(to right, #4a90e2, #50e3c2);
  }
`;

const SearchContainer = styled.div`
  width: 100%;
  /* max-width: 900px; */
  margin: 0 auto 2rem;
  padding: 2rem;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
`;

const MainContent = styled.main`
  display: flex;
  gap: 2rem;
  flex-grow: 1;
`;

const FiltersContainer = styled.aside`
  flex: 1;
  max-width: 280px;
  /* background-color: white; */
  border-radius: 12px;
  /* padding: 1.5rem; */
  /* box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08); */
  align-self: flex-start;
  position: sticky;
  top: 2rem;
`;

const ResultsContainer = styled.section`
  flex: 3;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  padding: 1.5rem;
  overflow-y: auto;
  max-height: calc(100vh - 280px);
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const StyledTextField = styled(TextField)`
  & .MuiOutlinedInput-root {
    background-color: #f8f9fa;
    border-radius: 8px;
    transition: all 0.3s ease;

    &:hover,
    &.Mui-focused {
      background-color: white;
      box-shadow: 0 0 0 2px #4a90e2;
    }

    fieldset {
      border-color: transparent;
    }
  }
`;

const StyledButton = styled(Button)`
  && {
    height: 56px;
    width: 56px;
    border-radius: 50%;
    min-width: unset;
    background: linear-gradient(45deg, #4a90e2, #50e3c2);
    box-shadow: 0 4px 20px rgba(74, 144, 226, 0.3);
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.05) rotate(5deg);
      box-shadow: 0 6px 25px rgba(74, 144, 226, 0.5);
    }
  }
`;

export const SearchPage = () => {
  const { setSearchResults } = useSearchState();

  useEffect(() => {
    setSearchResults({
      isLoading: false,
      topicSummerys: mockLandingSearchResults,
    });
  }, [setSearchResults]);

  return (
    <PageWrapper>
      <BackgroundSide />
      <ContentContainer>
        <SearchContainer>
          <SearchForm />
        </SearchContainer>
        <MainContent>
          <FiltersContainer>
            <FilterSideBar />
          </FiltersContainer>
          <ResultsContainer>
            <SearchResults />
          </ResultsContainer>
        </MainContent>
      </ContentContainer>
      <BackgroundSide />
    </PageWrapper>
  );
};

export const SearchForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { setSearch } = useSearchState();
  const { setSearchResults } = useSearchState();

  const onSubmit = async (data: any) => {
    setSearchResults({
      topicSummerys: [],
      isLoading: true,
    });
    setSearch({
      input: data.search,
    });
    await new Promise((resolve) => setTimeout(resolve, 500));
    setSearchResults({
      topicSummerys: mockSearchResults,
      isLoading: false,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormContainer>
        <StyledTextField
          {...register("topic", { required: true })}
          label="Topic"
          fullWidth
          error={!!errors.topic}
          helperText={errors.topic ? "Topic is required" : ""}
          margin="normal"
          variant="outlined"
        />
        <StyledButton type="submit" variant="contained" color="primary">
          <SearchIcon />
        </StyledButton>
      </FormContainer>
    </form>
  );
};
