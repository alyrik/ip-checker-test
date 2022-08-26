import React, { FC } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';

interface IProps {
  latitude: number;
  longitude: number;
  markerText: string;
}

const ChangeMapView = ({ position }: { position: [number, number] }) => {
  const map = useMap();
  map.setView(position, map.getZoom());

  return null;
};

export const CustomMap: FC<IProps> = ({ latitude, longitude, markerText }) => {
  return (
    <MapContainer
      className="w-full h-full"
      center={[latitude, longitude]}
      zoom={13}
      scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[latitude, longitude]}>
        <Popup>{markerText}</Popup>
      </Marker>
      <ChangeMapView position={[latitude, longitude]} />
    </MapContainer>
  );
};
