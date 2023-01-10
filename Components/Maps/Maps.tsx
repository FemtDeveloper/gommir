import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
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
    map.setZoom(17);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <Grid2
      display={"flex"}
      sx={{
        backgroundColor: "#f1f1f1",
        justifyContent: "center",
        padding: { xs: 4, sm: 8 },
      }}
      height={600}
    >
      <GoogleMap
        mapContainerClassName="map-container"
        center={center}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker position={center} />
        <></>
      </GoogleMap>
    </Grid2>
  ) : (
    <></>
  );
}

// export default React.memo(MyMap);
