import { Rating, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { countGradeProd, submitGradeProduct } from '../redux/actions/gradeProductAction';

export default function StarUserRating({ star }) {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [stateStar, setStateStar] = useState(0);
  useEffect(() => {
    dispatch(countGradeProd(id));
  }, [stateStar]);

  const starHandler = (newValue) => {
    console.log(newValue);
    dispatch(submitGradeProduct({ star: newValue, id }));
    setStateStar(stateStar + 1);
  };

  return (
    <div
      className="modalwindow"
      style={{
        width: '40%', height: '60%',
      }}
    >
      {console.log(star, '-----')}
      <Typography component="legend">(250) Оценок пользователей</Typography>

      <Rating
        name="simple-controlled"
        value={star}
        onChange={(e, newValue) => {
          // setStar(newValue);
          starHandler(newValue);
        }}
      />

    </div>
  );
}
