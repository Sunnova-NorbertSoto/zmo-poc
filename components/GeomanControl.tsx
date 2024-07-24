import { createControlComponent } from "@react-leaflet/core";
import * as L from "leaflet";
import "@geoman-io/leaflet-geoman-free";
import "@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css";

interface Props extends L.ControlOptions {
  position: L.ControlPosition;
  drawCircle?: boolean;
  oneBlock?: boolean;
}

const Geoman = L.Control.extend({
  options: {},
  initialize(options: Props) {
    L.setOptions(this, options);
  },

  addTo(map: L.Map) {
    if (!map.pm) return;

    map.pm.addControls({
      ...this.options,
    });

    let isPlacing = false;
    let tempLayer: L.Polygon | null = null;

    const handleMouseMove = (e: L.LeafletMouseEvent) => {
      const latlng = e.latlng;
      const scale = 0.00001; // Adjust this value to scale the size of the solar panel

      const solarPanelCoords: L.LatLngTuple[] = [
        [latlng.lat + scale, latlng.lng - scale],
        [latlng.lat + scale, latlng.lng + scale],
        [latlng.lat - scale, latlng.lng + scale],
        [latlng.lat - scale, latlng.lng - scale],
      ];

      if (tempLayer) {
        tempLayer.setLatLngs(solarPanelCoords);
      } else {
        tempLayer = L.polygon(solarPanelCoords, { color: "blue" }).addTo(map);
      }
    };

    const handleClick = (e: L.LeafletMouseEvent) => {
      if (tempLayer) {
        tempLayer.pm.disable(); // Disable editing and dragging
        tempLayer = null;
      }
    };

    const customButton = {
      name: "customButton",
      block: "custom" as "options" | "custom" | "draw" | "edit",
      className: "custom-button-class",
      title: "Add Solar Panel",
      onClick: () => {
        isPlacing = !isPlacing;

        if (isPlacing) {
          map.on("mousemove", handleMouseMove);
          map.on("click", handleClick);
        } else {
          map.off("mousemove", handleMouseMove);
          map.off("click", handleClick);
          if (tempLayer) {
            map.removeLayer(tempLayer);
            tempLayer = null;
          }
        }
      },
    };

    const toolbarButtons = map.pm.Toolbar.getButtons();
    if (!toolbarButtons.customButton) {
      map.pm.Toolbar.createCustomControl(customButton);
    }
  },
});

const createGeomanInstance = (props: Props) => {
  return new Geoman(props);
};

export const GeomanControl = createControlComponent(createGeomanInstance);
