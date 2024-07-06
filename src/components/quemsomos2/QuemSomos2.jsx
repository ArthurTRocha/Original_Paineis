import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

function QuemSomos2() {
  const mapStyles = {
    height: "400px",
    width: "100%",
  };

  const defaultCenter = {
    lat: -27.566212259173717,
    lng: -48.666745375991525,
  };

  return (
    <LoadScript googleMapsApiKey="">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={15} // Aumentando o zoom para 15
        center={defaultCenter}
      >
        <Marker position={{ lat: defaultCenter.lat + 0.001, lng: defaultCenter.lng }} /> {/* Ajustando a posição do marcador */}
      </GoogleMap>
    </LoadScript>
  );
}

export default QuemSomos2;
