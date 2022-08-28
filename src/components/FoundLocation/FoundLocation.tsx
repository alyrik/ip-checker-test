import React, { FC, useContext } from 'react';
import { CustomMap } from '../CustomMap/CustomMap';
import { LocationDescription } from '../LocationDescription/LocationDescription';
import { SearchContext } from '../../context/SearchContext';
import Message from '../Message/Message';
import { LocationRequestError } from '../../classes/LocationRequestError';

const errorMessages = {
  [LocationRequestError.ErrorType.General]:
    'Request failed. Please try again or reload the page.',
  [LocationRequestError.ErrorType.NotFound]:
    'Search was not successful. Try another query.',
};

export const FoundLocation: FC = () => {
  const { foundLocation, isError, errorType } = useContext(SearchContext)!;

  if (!foundLocation && !isError) return null;

  return (
    <div className="flex flex-col lg:grid grid-cols-1 lg:grid-cols-5 grid-rows-1 gap-4 h-full">
      <div className="col-span-3">
        {foundLocation && (
          <CustomMap
            latitude={foundLocation.latitude}
            longitude={foundLocation.longitude}
            markerText="That's your location based on your search."
          />
        )}
        {isError && (
          <Message type="error">
            {errorType ? errorMessages[errorType] : 'Something went wrong.'}
          </Message>
        )}
      </div>
      <div className="col-span-2">
        {foundLocation && (
          <LocationDescription
            ip={foundLocation.ip}
            country={foundLocation.country}
            region={foundLocation.region}
            city={foundLocation.city}
            latitude={foundLocation.latitude}
            longitude={foundLocation.longitude}
            organization={foundLocation.organization}
          />
        )}
      </div>
    </div>
  );
};
