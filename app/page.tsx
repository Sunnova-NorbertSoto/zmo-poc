"use client";

import { MapContainer, Rectangle, TileLayer } from "react-leaflet";
import * as L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "@geoman-io/leaflet-geoman-free";
import "@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css";
import { GeomanControl } from "../components/GeomanControl";
import Events from "../components/Events";

export default function Page() {
  const solarPanelCords = {
    lat: 18.37733398653396,
    lng: -65.92457771301271,
  };

  return (
    <div style={{ height: "100vh", width: "100vw", display: "flex" }}>
      <MapContainer
        center={solarPanelCords}
        zoom={40}
        style={{
          height: "700px",
          width: "1500px",
          margin: "auto",
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GeomanControl position="topleft" oneBlock />
        <Events />
      </MapContainer>
    </div>
  );
}
