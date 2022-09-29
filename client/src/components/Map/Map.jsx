import React, { useEffect } from 'react';
import { load } from '@2gis/mapgl';
import MapWrapper from './MapWrapper';

export default function Map({ address }) {
  useEffect(() => {
    fetch('/coordinates', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ address: 'москва ощепкова 1' }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        const x = data.lon;
        const y = data.lat;
        let map;
        load().then((mapglAPI) => {
          map = new mapglAPI.Map('map-container', {
            center: [x ?? 37.59958, y ?? 55.70574],
            zoom: 13,
            key: 'ee12180b-57c5-4c59-b3a2-6a198e86bf66',
          });
          const marker = new mapglAPI.Marker(map, { // маркеры
            coordinates: [x ?? 37.59958, y ?? 55.70574],
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
