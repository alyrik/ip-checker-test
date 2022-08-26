import React, { FC } from 'react';
import { CustomMap } from '../CustomMap/CustomMap';
import { LocationDescription } from '../LocationDescription/LocationDescription';
import { useGetCurrentLocation } from '../../actions/queries/getCurrentLocation/useGetCurrentLocation';

export const CurrentLocation: FC = () => {
  const { data: currentLocationData, isError } = useGetCurrentLocation();

  return (
    <div className="grid grid-cols-5 grid-rows-1 gap-4 h-full">
      <div className="col-span-3">
        {currentLocationData && (
          <CustomMap
            latitude={currentLocationData.latitude}
            longitude={currentLocationData.longitude}
            markerText="That's your location based on your IP. No one said it would match your physical location :)"
          />
        )}
      </div>
      <div className="col-span-2">
        {currentLocationData && (
          <LocationDescription
            ip={currentLocationData.ip}
            country={currentLocationData.country}
            region={currentLocationData.region}
            city={currentLocationData.city}
            latitude={currentLocationData.latitude}
            longitude={currentLocationData.longitude}
            organization={currentLocationData.organization}
          />
        )}
      </div>
    </div>
  );
};
