import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
// import { Marker, marker } from "leaflet";

const SimpleMap = ({ markers }) => {
  return (
    <MapContainer
      center={[28.9931, 77.0151]}
      zoom={13}
      style={{ height: "500px", width: "70%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {markers.map((marker) => {
        console.log(marker.geocode);
        return <Marker position={marker.geocode}></Marker>;
      })}
    </MapContainer>
  );
};

export default SimpleMap;
