import { createContext, FC, ReactNode, useEffect, useState } from 'react';

import { useSearchLocation } from '../actions/queries/searchLocation/useSearchLocation';
import { ILocation } from '../models/location';
import { LocationRequestErrorType } from '../classes/LocationRequestError';
import { StorageService } from '../services/StorageService';

type UpdateSearchTerm = (
  value: string,
  params?: { shouldSkipRecentSearch?: boolean },
) => void;

type RecentSearches = string[];

interface ISearchContext {
  searchTerm: string;
  updateSearchTerm: UpdateSearchTerm;
  foundLocation: ILocation | undefined;
  recentSearches: RecentSearches;
  isError: boolean;
  errorType: LocationRequestErrorType | undefined;
}

const recentSearchesKey = 'recentSearches';

const storageService = new StorageService(window.sessionStorage);

export const SearchContext = createContext<ISearchContext | null>(null);

export const SearchContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [recentSearches, setRecentSearches] = useState(
    storageService.getItem<RecentSearches>(recentSearchesKey) || [],
  );
  const [shouldSkipRecentSearch, setShouldSkipRecentSearch] = useState(false);

  const updateRecentSearches = (recentSearches: RecentSearches) => {
    setRecentSearches(recentSearches);
    storageService.setItem(recentSearchesKey, recentSearches);
  };

  const {
    data: foundLocation,
    isError,
    refetch,
    error,
  } = useSearchLocation(searchTerm, {
    isEnabled: false,
    onSuccess() {
      if (!shouldSkipRecentSearch) {
        updateRecentSearches([searchTerm, ...recentSearches]);
      }
    },
  });

  useEffect(() => {
    if (searchTerm) {
      refetch();
    }
  }, [searchTerm]);

  const updateSearchTerm: UpdateSearchTerm = (value: string, params) => {
    setSearchTerm(value);
    setShouldSkipRecentSearch(params?.shouldSkipRecentSearch ?? false);
  };

  return (
    <SearchContext.Provider
      value={{
        searchTerm,
        updateSearchTerm,
        foundLocation,
        recentSearches,
        isError,
        errorType: error?.type,
      }}>
      {children}
    </SearchContext.Provider>
  );
};
