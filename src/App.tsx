import React from 'react';

import { IpSearchBox } from './components/IpSearchBox/IpSearchBox';
import { CurrentLocation } from './components/CurrentLocation/CurrentLocation';
import { FoundLocation } from './components/FoundLocation/FoundLocation';

function App() {
  return (
    <div className="grid grid-cols-4 grid-rows-1 gap-4 h-screen p-4">
      <div className="col-span-1">Recent searches</div>
      <div className="col-span-3">
        <div className="grid grid-rows-6 gap-4 h-full">
          <div className="row-span-2">
            <CurrentLocation />
          </div>
          <div className="row-span-4">
            <div className="grid grid-rows-4 gap-4 h-full">
              <div className="row-span-1 grid grid-cols-5">
                <div className="col-span-3">
                  <IpSearchBox />
                </div>
              </div>
              <div className="row-span-3">
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
