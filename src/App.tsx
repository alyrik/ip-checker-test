import React from 'react';

import { IpSearchBox } from './components/IpSearchBox/IpSearchBox';
import { CurrentLocation } from './components/CurrentLocation/CurrentLocation';
import { FoundLocation } from './components/FoundLocation/FoundLocation';
import RecentSearches from './components/RecentSearches/RecentSearches';

function App() {
  return (
    <div className="grid grid-cols-5 grid-rows-1 gap-4 min-h-screen p-4">
      <div className="col-span-1 h-full overflow-auto">
        <RecentSearches />
      </div>
      <div className="col-span-4">
        <div className="grid grid-rows-6 gap-4 min-h-full">
          <div className="row-span-2 grid">
            <CurrentLocation />
          </div>
          <div className="row-span-4">
            <div className="grid grid-rows-6 gap-4 h-full">
              <div className="row-span-1 grid grid-cols-5 gap-4 items-end">
                <div className="col-span-3">
                  <IpSearchBox />
                </div>
              </div>
              <div className="row-span-5">
                <FoundLocation />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
