import React from 'react';

import { CustomMap } from './components/CustomMap/CustomMap';
import { useGetCurrentLocation } from './actions/queries/getCurrentLocation/useGetCurrentLocation';
import { LocationDescription } from './components/LocationDescription/LocationDescription';

function App() {
  const { data: currentLocationData, isError } = useGetCurrentLocation();

  return (
    <div className="grid grid-cols-4 grid-rows-1 gap-4 h-screen p-4">
      <div className="col-span-1">Recent searches</div>
      <div className="col-span-3">
        <div className="grid grid-rows-6 gap-4 h-full">
          <div className="row-span-2">
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
                    countryFlag={currentLocationData.countryFlag}
                    region={currentLocationData.region}
                    city={currentLocationData.city}
                    latitude={currentLocationData.latitude}
                    longitude={currentLocationData.longitude}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="row-span-4">
            Search box and last searched location
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
