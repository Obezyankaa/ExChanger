import React, { useEffect } from 'react';
import { load } from '@2gis/mapgl';
import axios from 'axios';
import MapWrapper from './MapWrapper';

export default function Map() {
  useEffect(() => {
    axios.post('/coordinates', { address: 'москва ощепкова 1' })
      .then((resp) => {
        const x = resp.data.lon;
        const y = resp.data.lat;
        const { metro } = resp.data;
        // console.log(metro);
        let map;
        load().then((mapglAPI) => {
          map = new mapglAPI.Map('map-container', {
            center: [x, y],
            zoom: 13,
            key: 'ee12180b-57c5-4c59-b3a2-6a198e86bf66',
          });
          const marker = new mapglAPI.Marker(map, { // маркеры
            coordinates: [x, y],
          });
        });
        return () => map && map.destroy();
      });
  }, []);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <MapWrapper />
    </div>
  );
}
