import React from 'react';
import PropTypes from 'prop-types';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import GOOGLE_API_KEY from '../../config';

const containerStyle = {
  width: '100%',
  height: '300px',
  marginTop: '30px',
};

const EntryMap = ({ location }) => (
  <LoadScript
    googleMapsApiKey={GOOGLE_API_KEY}
  >
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={location}
      zoom={15}
    >
      <Marker position={location} />
    </GoogleMap>
  </LoadScript>
);

export default React.memo(EntryMap);

EntryMap.propTypes = {
  location: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }).isRequired,
};
