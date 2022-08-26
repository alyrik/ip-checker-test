import { useQuery } from '@tanstack/react-query';

import { searchLocation } from './searchLocation';
import { QueryKey } from '..';
import { locationTransformer } from '../../../transformers/location.transformer';

export function useSearchLocation(
  searchTerm: string,
  params: { isEnabled: boolean },
) {
  return useQuery([QueryKey.SearchLocation, searchTerm], searchLocation, {
    select: locationTransformer,
    enabled: params.isEnabled,
  });
}
