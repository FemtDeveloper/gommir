import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import React from "react";

const center = {
  lat: 4.67883,
  lng: -74.0485,
};

export default function MyMap() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY!,
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map: any) {
    map.setZoom(17);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <div className="flex bg-gray-100 justify-center p-4 sm:p-8 h-[600px]">
      <GoogleMap
        mapContainerClassName="map-container"
        center={center}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker position={center} />
        <></>
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
}

// export default React.memo(MyMap);
