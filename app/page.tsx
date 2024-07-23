'use client';

import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
export default function Page() {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
    <MapContainer
    center={{
      lat: 18.37733398653396,
      lng: -65.92457771301271,
    }}
    zoom={10}
    style={{ 
      height: '500px',
      width: '800px',
      margin: 'auto',
    }}
    >
    <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
    </div>
  );
}

