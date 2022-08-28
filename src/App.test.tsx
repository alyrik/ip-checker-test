import React from 'react';
import { render, screen } from '@testing-library/react';
import mockAxios from 'jest-mock-axios';
import axios from 'axios';

import App from './App';
import { QueryClientProviderMock } from './tests/QueryClientProvider.mock';
import { SearchContextProvider } from './context/SearchContext';

describe('App', () => {
  beforeEach(() => {
    mockAxios.reset();
    axios.get = jest.fn().mockResolvedValue({ data: {} });
  });

  it('renders main blocks', () => {
    render(
      <QueryClientProviderMock>
        <SearchContextProvider>
          <App />
        </SearchContextProvider>
      </QueryClientProviderMock>,
    );

    const recentSearchesBlock = screen.getByText('Recent searches:');
    const currentLocationBlock = screen.getByText('Your current location:');
    const searchBlock = screen.getByText('Search:');

    expect(recentSearchesBlock).toBeInTheDocument();
    expect(currentLocationBlock).toBeInTheDocument();
    expect(searchBlock).toBeInTheDocument();
  });
});
