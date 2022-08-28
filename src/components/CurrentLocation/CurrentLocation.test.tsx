import React from 'react';
import { render, screen } from '@testing-library/react';

import * as useGetCurrentLocationModule from '../../actions/queries/getCurrentLocation/useGetCurrentLocation';
import { CurrentLocation } from './CurrentLocation';
import { UseQueryResult } from '@tanstack/react-query';
import { ILocation } from '../../models/location';

jest.mock('../../actions/queries/getCurrentLocation/useGetCurrentLocation');

describe('CurrentLocation', () => {
  const dataStub = {
    ip: 'test-ip',
    country: 'test-country',
    region: 'test-region',
    city: 'test-city',
    latitude: 123,
    longitude: 456,
    organization: 'test-organization',
  };

  it('shows location data', () => {
    jest
      .spyOn(useGetCurrentLocationModule, 'useGetCurrentLocation')
      .mockReturnValue({
        data: dataStub,
      } as UseQueryResult<ILocation>);
    render(<CurrentLocation />);

    Object.values(dataStub).forEach((value) =>
      expect(screen.getByText(value)).toBeInTheDocument(),
    );
    expect(screen.getByText('MapContainer')).toBeInTheDocument();
  });

  it('shows error message on error', () => {
    jest
      .spyOn(useGetCurrentLocationModule, 'useGetCurrentLocation')
      .mockReturnValue({ isError: true } as UseQueryResult<ILocation>);
    render(<CurrentLocation />);

    expect(
      screen.getByText(
        "Something went wrong. We're unable to detect your location.",
      ),
    ).toBeInTheDocument();
  });
});
