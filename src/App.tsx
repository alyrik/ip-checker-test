import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function App() {
  return (
    <div className="grid grid-cols-4 grid-rows-1 gap-4 h-screen p-4">
      <div className="col-span-1">Recent searches</div>
      <div className="col-span-3">
        <div className="grid grid-rows-6 gap-4 h-full">
          <div className="row-span-2">
            <div className="grid grid-cols-5 grid-rows-1 gap-4 h-full">
              <div className="col-span-3">
                <MapContainer
                  className="w-full h-full"
                  center={[51.505, -0.09]}
                  zoom={13}
                  scrollWheelZoom={false}>
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={[51.505, -0.09]}>
                    <Popup>
                      A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
              <div className="col-span-2">Information about user location</div>
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
