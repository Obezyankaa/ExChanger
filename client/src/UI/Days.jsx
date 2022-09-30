import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export default function Days({ changeHandler }) {
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        name="timing"
        aria-label="Temperature"
        defaultValue={0}
        valueLabelDisplay="auto"
        step={1}
        marks
        min={1}
        max={10}
        onChange={changeHandler}
      />
    </Box>
  );
}
