import { createContext, FC, ReactNode, useEffect, useState } from 'react';

import { useSearchLocation } from '../actions/queries/searchLocation/useSearchLocation';
import { ILocation } from '../models/location';

type UpdateSearchTerm = (
  value: string,
  params?: { shouldSkipRecentSearch?: boolean },
) => void;

interface ISearchContext {
  searchTerm: string;
  updateSearchTerm: UpdateSearchTerm;
  foundLocation: ILocation | undefined;
  recentSearches: string[];
  isError: boolean;
}

export const SearchContext = createContext<ISearchContext | null>(null);

export const SearchContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [shouldSkipRecentSearch, setShouldSkipRecentSearch] = useState(false);

  const {
    data: foundLocation,
    isError,
    refetch,
  } = useSearchLocation(searchTerm, {
    isEnabled: false,
    onSuccess() {
      if (!shouldSkipRecentSearch) {
        setRecentSearches([searchTerm, ...recentSearches]);
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
      }}>
      {children}
    </SearchContext.Provider>
  );
};
