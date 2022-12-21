import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

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
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerClassName="map-container"
      center={center}
      zoom={2}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker position={center} />
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}

// export default React.memo(MyMap);
