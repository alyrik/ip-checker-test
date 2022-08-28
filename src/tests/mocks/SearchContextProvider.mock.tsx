import React, { FC, ReactNode } from 'react';

import { SearchContext, UpdateSearchTerm } from '../../context/SearchContext';

interface Props {
  children: ReactNode;
  searchTerm?: string;
  updateSearchTerm?: UpdateSearchTerm;
  isError?: boolean;
}

export const SearchContextProviderMock: FC<Props> = ({
  children,
  searchTerm,
  updateSearchTerm,
  isError,
}) => (
  <SearchContext.Provider
    value={{
      searchTerm: searchTerm ?? '',
      updateSearchTerm: updateSearchTerm || jest.fn(),
      foundLocation: undefined,
      recentSearches: [],
      isError: isError ?? false,
      errorType: undefined,
    }}>
    {children}
  </SearchContext.Provider>
);
