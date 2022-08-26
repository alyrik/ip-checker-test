import React, { FC, useContext } from 'react';
import { CustomMap } from '../CustomMap/CustomMap';
import { LocationDescription } from '../LocationDescription/LocationDescription';
import { SearchContext } from '../../context/SearchContext';

export const FoundLocation: FC = () => {
  const { foundLocation } = useContext(SearchContext)!;

  return (
    <div className="grid grid-cols-5 grid-rows-1 gap-4 h-full">
      <div className="col-span-3">
        {foundLocation && (
          <CustomMap
            latitude={foundLocation.latitude}
            longitude={foundLocation.longitude}
            markerText="That's your location based on your search."
          />
        )}
      </div>
      <div className="col-span-2">
        {foundLocation && (
          <LocationDescription
            ip={foundLocation.ip}
            country={foundLocation.country}
            countryFlag={foundLocation.countryFlag}
            region={foundLocation.region}
            city={foundLocation.city}
            latitude={foundLocation.latitude}
            longitude={foundLocation.longitude}
          />
        )}
      </div>
    </div>
  );
};
