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
  //create options
  options: {},
  initialize(options: Props) {
    L.setOptions(this, options);
  },

  addTo(map: L.Map) {
    if (!map.pm) return;

    map.pm.addControls({
      //add only the marker control
      drawMarker: true,
      rorateMode: false,
      editMode: false,
      cutPolygon: false,
      removalMode: false,
      customControls: true,
      drawCircleMarker: false,
      drawCircle: this.options.drawCircle,
      drawRectangle: false,
      drawPolyline: false,
      drawPolygon: false,
      drawText: false,
    });

    let isPlacing = false;
    let tempLayer: L.Polygon | null = null;
    let selectedLayer: L.Polygon | null = null;

    const handleMouseMove = (e: L.LeafletMouseEvent) => {
      const latlng = e.latlng;
      const scale = 0.0001;

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

    const handlePolygonClick = (layer: L.Polygon) => {
      if (selectedLayer && selectedLayer !== layer) {
        selectedLayer.setStyle({ color: "blue" });
      }
      const currentColor = layer.options.color;
      const newColor = currentColor === "blue" ? "gray" : "blue";
      layer.setStyle({ color: newColor });
      selectedLayer = layer === selectedLayer ? null : layer;

      //add an on hover action after is being clicked to display a tooltip
      layer.on("mouseover", (e) => {
        const tooltip = L.tooltip({
          permanent: false,
          direction: "center",
          className: "custom-tooltip",
          offset: [0, 0],
        })
          .setContent("Here is the solar panel content tooltip")
          .setLatLng(e.latlng)
          .addTo(map);
      });
    };

    map.on("mouseout", () => {
      map.closePopup();
    });

    const handleAddButtonClick = (e: L.LeafletMouseEvent) => {
      if (tempLayer) {
        const currentLayer = tempLayer;
        currentLayer.on("click", () => handlePolygonClick(currentLayer));
        currentLayer.pm.disable();
        tempLayer = null;
      }
    };

    const customButton = {
      name: "customButton",
      block: "custom" as "options" | "custom" | "draw" | "edit",
      className: "custom-button-class",
      title: "Add Solar Panel",
      icon: "fas fa-solar-panel",

      onClick: () => {
        isPlacing = !isPlacing;

        if (isPlacing) {
          map.on("mousemove", handleMouseMove);
          map.on("click", handleAddButtonClick);
        } else {
          map.off("mousemove", handleMouseMove);
          map.off("click", handleAddButtonClick);
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
