import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import GOOGLE_API_KEY from '../../config';

const containerStyle = {
  width: '100%',
  height: '300px',
};

function EntryMap({ location }) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: GOOGLE_API_KEY,
  });

  const [map, setMap] = React.useState(null);

  // TODO - Fix, Makes zoom broken
  // const onLoad = React.useCallback(function callback(map) {
  //   const bounds = new window.google.maps.LatLngBounds();
  //   map.fitBounds(bounds);
  //   setMap(map)
  // }, []);

  const onUnmount = React.useCallback((map) => {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={location}
      // onLoad={onLoad}
      zoom={15}
      onUnmount={onUnmount}
    >
      <Marker position={location} />
    </GoogleMap>
  ) : <></>;
}

export default React.memo(EntryMap);
