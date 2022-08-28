import React from 'react';

import { SearchBox } from './components/SearchBox/SearchBox';
import { CurrentLocation } from './components/CurrentLocation/CurrentLocation';
import { FoundLocation } from './components/FoundLocation/FoundLocation';
import RecentSearches from './components/RecentSearches/RecentSearches';

function App() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 grid-rows-1 gap-8 lg:gap-4 min-h-screen p-4">
      <aside className="order-2 lg:order-1 col-span-1 h-full overflow-auto">
        <RecentSearches />
      </aside>
      <main className="order-1 lg:order-2 col-span-4">
        <div className="flex flex-col lg:grid grid-rows-6 gap-8 lg:gap-4 min-h-full">
          <section className="row-span-2 grid">
            <CurrentLocation />
          </section>
          <section className="row-span-4">
            <div className="flex flex-col lg:grid grid-rows-6 gap-4 h-full">
              <div className="row-span-1 lg:grid grid-cols-5 gap-8 lg:gap-4 items-end">
                <div className="col-span-3">
                  <SearchBox />
                </div>
              </div>
              <div className="row-span-5">
                <FoundLocation />
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
