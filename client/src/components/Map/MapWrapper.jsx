import React from 'react';

const MapWrapper = React.memo(
  () => <div id="map-container" style={{ width: 400, height: 400 }} />,
  () => true,
);

export default MapWrapper;
