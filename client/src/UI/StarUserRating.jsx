import { Rating, Typography } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { submitGradeProduct } from '../redux/actions/gradeProductAction';

export default function StarUserRating({ star }) {
  const dispatch = useDispatch();
  // const starRating = useSelector((state) => state.gradeProduct);
  // console.log(starRating);
  // const [star] = useState(starRating);
  const { id } = useParams();

  // useEffect(() => {
  //   dispatch(countGradeProd(id));
  // }, [star]);

  const starHandler = (newValue) => {
    console.log(newValue);
    dispatch(submitGradeProduct({ star: newValue, id }));
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
