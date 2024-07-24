"use client";

import { MapContainer, TileLayer } from "react-leaflet";
import * as L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "@geoman-io/leaflet-geoman-free";
import "@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css";
import { GeomanControl } from "../components/GeomanControl";
import Events from "../components/Events";

const SolarPanelButton = (map: any) => {
  const addSolarPanel = () => {
    const map = mapRef.current;
    if (map) {
      const solarPanelCoords = [
        [51.505, -0.09],
        [51.505, -0.08],
        [51.495, -0.08],
        [51.495, -0.09],
      ];

      const layer = L.polygon(solarPanelCoords, { color: "blue" }).addTo(map);

      layer.pm.enable({
        draggable: true,
        snappable: true,
      });

      layer.on("pm:edit", (e) => {
        console.log("Polygon edited:", e);
      });
      layer.on("pm:dragstart", (e) => {
        console.log("Polygon drag started:", e);
      });
      layer.on("pm:dragend", (e) => {
        console.log("Polygon drag ended:", e);
      });
    }
  };

  return <button onClick={addSolarPanel}>Add Solar Panel</button>;
};
