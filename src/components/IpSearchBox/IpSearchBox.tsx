import React, { ChangeEvent, FC, FormEvent, useContext, useState } from 'react';
import { SearchContext } from '../../context/SearchContext';

interface IProps {}

export const IpSearchBox: FC<IProps> = ({}) => {
  const [inputValue, setInputValue] = useState('');

  const { searchTerm, updateSearchTerm } = useContext(SearchContext)!;

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    updateSearchTerm(inputValue.trim());
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setInputValue(e.target.value);
  };

  return (
    <form className="flex gap-2" noValidate={true} onSubmit={handleFormSubmit}>
      <input
        className="flex-1 border-2"
        type="text"
        placeholder="IP or domain name"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button className="w-20 flex-shrink-0 bg-black text-white">Search</button>
    </form>
  );
};
