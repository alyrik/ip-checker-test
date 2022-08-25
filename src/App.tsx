import React from 'react';

import { CustomMap } from './components/CustomMap/CustomMap';
import { useGetCurrentLocation } from './actions/queries/getCurrentLocation/useGetCurrentLocation';

function App() {
  const { data: currentLocationData, isError } = useGetCurrentLocation();

  console.log(currentLocationData);
  console.log('IS error', isError);

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
                  />
                )}
              </div>
              <div className="col-span-2">
                IP Address: 94.75.122.122 Latitude: 52.2296 Longitude: 21.0067
                Country: Poland Region: Mazovia City: Warsaw Organization: UPC
                Polska
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
