import { useQuery } from '@tanstack/react-query';

import { searchLocation } from './searchLocation';
import { QueryKey } from '..';
import { locationTransformer } from '../../../transformers/location.transformer';
import { LocationRequestError } from '../../../classes/LocationRequestError';
import { ILocation, IRawLocation } from '../../../models/location';

export function useSearchLocation(
  searchTerm: string,
  params: { isEnabled?: boolean; onSuccess?(): void },
) {
  return useQuery<IRawLocation, LocationRequestError, ILocation>(
    [QueryKey.SearchLocation, searchTerm],
    () => searchLocation(searchTerm),
    {
      staleTime: Infinity,
      select: locationTransformer,
      enabled: params.isEnabled,
      retry: false,
      onSuccess: params.onSuccess,
    },
  );
}
