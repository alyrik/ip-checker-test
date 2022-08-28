import React, {
  ChangeEvent,
  FC,
  FormEvent,
  useContext,
  useEffect,
  useState,
} from 'react';
import isIP from 'validator/lib/isIP';
import isFQDN from 'validator/lib/isFQDN';

import { SearchContext } from '../../context/SearchContext';

const isValueValid = (value: string) => {
  const trimmedValue = value.trim();
  return isIP(trimmedValue) || isFQDN(trimmedValue);
};

export const SearchBox: FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const { searchTerm, updateSearchTerm, isError } = useContext(SearchContext)!;

  useEffect(() => {
    if (searchTerm !== inputValue) {
      setInputValue(searchTerm);
    }
  }, [searchTerm]);

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    updateSearchTerm(inputValue.trim());
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const { value } = e.target;

    setInputValue(value);
    setIsButtonDisabled(!isValueValid(value));
  };

  return (
    <form noValidate={true} onSubmit={handleFormSubmit}>
      <label className="block font-bold mb-2" htmlFor="search-input">
        Search:
      </label>
      <div className="flex gap-2">
        <input
          id="search-input"
          className={`flex-1 border-2
        ${
          isError
            ? 'border-red-600 focus:border-red-600 focus:outline-red-600'
            : 'border-black'
        } p-1`}
          type="text"
          title="Search by IP or domain name"
          placeholder="IP or domain name"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          disabled={isButtonDisabled}
          className="w-20 flex-shrink-0 bg-black text-white disabled:bg-gray-300 disabled:cursor-not-allowed">
          Search
        </button>
      </div>
    </form>
  );
};
