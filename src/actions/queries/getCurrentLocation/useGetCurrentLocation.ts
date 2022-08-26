import { useQuery } from '@tanstack/react-query';

import { getCurrentLocation } from './getCurrentLocation';
import { QueryKey } from '..';
import { locationTransformer } from '../../../transformers/location.transformer';

export function useGetCurrentLocation() {
  return useQuery([QueryKey.GetCurrentLocation], getCurrentLocation, {
    staleTime: Infinity,
    select: locationTransformer,
  });
}
