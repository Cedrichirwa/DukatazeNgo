"use client";
import React from "react";
import {  useJsApiLoader } from "@react-google-maps/api";

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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        <div className=" flex justify-center items-center  mt-2 mb-5">
          <h2 className="py-2 sm:text-5xl text-3xl font-bold text-cyan-700">
            Location
          </h2>
          <p className=" text-gray-400 p-1">Visit us through this guide</p>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.301442900088!2d30.046234273961517!3d-1.99321789798879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca5057ef7f3cd%3A0xc3ab98f1376cabc!2sSAYE%20COMPANY%20Ltd%2F%20DUKATAZE!5e1!3m2!1sen!2srw!4v1728502141022!5m2!1sen!2srw"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          mapContainerStyle={containerStyle} center={center}
          position={center}
        ></iframe>
        {/* <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={17}>
          <Marker position={center} />
        </GoogleMap> */}
      </div>
    )
  );
}
export default React.memo(Mapp);
