import { useQuery } from '@tanstack/react-query';

import { searchLocation } from './searchLocation';
import { QueryKey } from '..';
import { locationTransformer } from '../../../transformers/location.transformer';

export function useSearchLocation(
  searchTerm: string,
  params: { isEnabled?: boolean; onSuccess?(): void },
) {
  return useQuery([QueryKey.SearchLocation, searchTerm], searchLocation, {
    staleTime: Infinity,
    select: locationTransformer,
    enabled: params.isEnabled,
    retry: false,
    onSuccess: params.onSuccess,
  });
}
