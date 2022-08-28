import React, { FC } from 'react';
import { CustomMap } from '../CustomMap/CustomMap';
import { LocationDescription } from '../LocationDescription/LocationDescription';
import { useGetCurrentLocation } from '../../actions/queries/getCurrentLocation/useGetCurrentLocation';
import Message from '../Message/Message';

export const CurrentLocation: FC = () => {
  const { data: currentLocationData, isError } = useGetCurrentLocation();

  return (
    <div className="flex flex-col">
      <h2 className="font-bold mb-2">Your current location:</h2>
      <div className="flex flex-col lg:grid grid-cols-1 lg:grid-cols-5 grid-rows-1 gap-4 flex-grow">
        <div className="col-span-3">
          {currentLocationData && (
            <CustomMap
              latitude={currentLocationData.latitude}
              longitude={currentLocationData.longitude}
              markerText="That's your location based on your IP. No one said it would match your physical location :)"
            />
          )}
          {isError && (
            <Message type="error">
              Something went wrong. We're unable to detect your location.
            </Message>
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
    </div>
  );
};
