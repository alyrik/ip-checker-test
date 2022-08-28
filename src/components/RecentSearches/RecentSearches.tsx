import React, { FC, useContext } from 'react';
import { SearchContext } from '../../context/SearchContext';

const RecentSearches: FC = () => {
  const { recentSearches, updateSearchTerm } = useContext(SearchContext)!;

  const handleButtonClick = (searchTerm: string) =>
    updateSearchTerm(searchTerm, { shouldSkipRecentSearch: true });

  return (
    <div>
      <h2 className="font-bold mb-2">Recent searches:</h2>
      {!recentSearches.length && 'No recent searches yet.'}
      {recentSearches.map((searchTerm, index) => (
        <button
          className="mb-1 text-blue-400 hover:text-blue-200 transition-colors block max-w-full"
          key={searchTerm + index}
          onClick={() => handleButtonClick(searchTerm)}>
          <span className="text-ellipsis max-w-full block overflow-hidden">
            {searchTerm}
          </span>
        </button>
      ))}
    </div>
  );
};

export default RecentSearches;
