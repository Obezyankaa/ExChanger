import { Rating, Typography } from '@mui/material';
import React, { useState } from 'react';

export default function StarUserRating() {
  const [star, setStar] = useState(0);
  return (
    <div
      className="modalwindow"
      style={{
        width: '40%', height: '60%', marginLeft: 'auto', marginRight: 'auto', marginTop: '10%',
      }}
    >
      <Typography component="legend">Рейтинг пользователя</Typography>
      <Rating
        name="simple-controlled"
        value={star}
        onChange={(event, newValue) => {
          setStar(newValue);
        }}
      />
    </div>
  );
}
