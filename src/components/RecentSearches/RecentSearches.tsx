import React, { FC, useContext } from 'react';
import { SearchContext } from '../../context/SearchContext';

const RecentSearches: FC = () => {
  const { recentSearches, updateSearchTerm } = useContext(SearchContext)!;

  const handleButtonClick = (searchTerm: string) =>
    updateSearchTerm(searchTerm, { shouldSkipRecentSearch: true });

  return (
    <div>
      <h2 className="font-bold mb-2">Recent searches:</h2>
      {recentSearches.map((searchTerm, index) => (
        <button
          className="mb-1 text-blue-400 hover:text-blue-200 transition-colors block"
          key={searchTerm + index}
          onClick={() => handleButtonClick(searchTerm)}>
          {searchTerm}
        </button>
      ))}
    </div>
  );
};

export default RecentSearches;
