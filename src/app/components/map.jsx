"use client";
import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: -1.993207,
  lng: 30.048809,
};

function Mapp() {
  const { isLoaded } = useJsApiLoader({
    id: process.env.NEXT_PUBLIC_MAP_ID,
    googleMapsApiKey: process.env.NEXT_PUBLIC_API_KEY,
  });
  return (
    isLoaded && (
      <>
        <div className="text-center  mt-2 mb-5">
          <h2 className="py-2 sm:text-5xl text-3xl font-bold text-cyan-700">
            Location
          </h2>
          <p className=" text-gray-400 p-1">Visit us through this guide</p>
        </div>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={17}>
          <Marker position={center} />
        </GoogleMap>
      </>
    )
  );
}
export default React.memo(Mapp);
