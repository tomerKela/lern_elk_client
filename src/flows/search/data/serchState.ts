import { create } from "zustand";

export interface TopicSummery {
  name: string;
  ID: string;
  teacher: {
    ID: string;
    description: string;
    firstName: string;
    lastName: string;
    email: string;
    profilePictureUrl: string;
  };
  description: string;
  hourlyRate: number;
  minimalMinutes: number;
  averageRating: number;
  numberOfRatings: number;
}

export interface SearchResults {
  topicSummerys: TopicSummery[];
  isLoading: boolean;
}

export interface Filters {
  maxPrice?: number;
  minPrice?: number;
  minRating?: number;
  maxAge?: number;
  minAge?: number;
  gender?: string;
  language?: string;
}

export interface Search {
  input: string;
}

interface SearchResultsState {
  searchResults: SearchResults;
  setSearchResults: (searchResults: SearchResults) => void;
  chosenTopic: TopicSummery | null;
  setChosenTopic: (chosenTopic: TopicSummery) => void;
  search: Search;
  setSearch: (search: Search) => void;
  filters: Filters;
  setFilters: (filters: Filters) => void;
}

export const useSearchState = create<SearchResultsState>((set) => ({
  searchResults: {
    topicSummerys: [],
    isLoading: false,
  },
  setSearchResults: (searchResults: SearchResults) => set({ searchResults }),
  chosenTopic: null,
  setChosenTopic: (chosenTopic: TopicSummery) => set({ chosenTopic }),
  search: {
    input: "",
  },
  setSearch: (search: Search) => set({ search }),
  filters: {
    maxPrice: undefined,
    minPrice: undefined,
    minRating: undefined,
    maxAge: undefined,
    minAge: undefined,
    gender: undefined,
  },
  setFilters: (filters: Filters) => set({ filters }),
}));
