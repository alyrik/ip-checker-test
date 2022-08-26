import { createContext, FC, ReactNode, useEffect, useState } from 'react';

import { useSearchLocation } from '../actions/queries/searchLocation/useSearchLocation';
import { ILocation } from '../models/location';

interface ISearchContext {
  searchTerm: string;
  updateSearchTerm(value: string): void;
  foundLocation: ILocation | undefined;
}

export const SearchContext = createContext<ISearchContext | null>(null);

export const SearchContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const { data: foundLocation, refetch } = useSearchLocation(searchTerm, {
    isEnabled: false,
  });

  useEffect(() => {
    if (searchTerm) {
      refetch();
    }
  }, [searchTerm]);

  const updateSearchTerm = (value: string) => {
    setSearchTerm(value);
  };

  return (
    <SearchContext.Provider
      value={{ searchTerm, updateSearchTerm, foundLocation }}>
      {children}
    </SearchContext.Provider>
  );
};
