import React from 'react';
import { render, screen } from '@testing-library/react';

import { SearchContextProviderMock } from '../../tests/mocks/SearchContextProvider.mock';
import { renderWithUserEvent } from '../../tests/utils/renderWithUserEvent';
import { SearchBox } from './SearchBox';

const inputPlaceholderText = 'IP or domain name';
const buttonText = 'Search';

const getInput = () => screen.getByPlaceholderText(inputPlaceholderText);
const getButton = () => screen.getByText(buttonText);

describe('SearchBox', () => {
  it('changes button disabled state based on input value', async () => {
    const { user } = renderWithUserEvent(
      <SearchContextProviderMock>
        <SearchBox />
      </SearchContextProviderMock>,
    );
    const input = getInput();
    const button = getButton();

    await user.type(input, 'google');

    expect(button).toBeDisabled();

    await user.clear(input);
    await user.type(input, 'google.com');

    expect(button).toBeEnabled();
  });

  it('triggers context callback on submit', async () => {
    const updateSearchTermMock = jest.fn();
    const { user } = renderWithUserEvent(
      <SearchContextProviderMock updateSearchTerm={updateSearchTermMock}>
        <SearchBox />
      </SearchContextProviderMock>,
    );
    const input = getInput();
    const button = getButton();

    await user.type(input, '  google.com  ');
    await user.click(button);

    expect(updateSearchTermMock).toHaveBeenCalledTimes(1);
    expect(updateSearchTermMock).toHaveBeenCalledWith('google.com');
  });

  it('styles input properly on error', async () => {
    render(
      <SearchContextProviderMock isError={true}>
        <SearchBox />
      </SearchContextProviderMock>,
    );
    const input = getInput();

    expect(input).toHaveClass(
      'border-red-600 focus:border-red-600 focus:outline-red-600',
    );
  });
});
