import { useQuery } from '@tanstack/react-query';

import { getCurrentLocation } from './getCurrentLocation';
import { QueryKey } from '..';

export function useGetCurrentLocation() {
  return useQuery([QueryKey.GetCurrentLocation], getCurrentLocation, {
    staleTime: Infinity,
  });
}
