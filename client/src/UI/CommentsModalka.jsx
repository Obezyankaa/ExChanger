import * as React from 'react';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setComments } from '../redux/actions/CommentsAction';

export default function CommentsModalka() {
  const { comments } = useSelector((state) => state.prodItemPage);
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    f_name: '',
  });
  console.log(comments);
  //   useEffect(() => {
  //     const newInputs = { ...user }; setInputs(newInputs);
  //   }, [user]);
  const changeHandler = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form onSubmit={(e) => dispatch(setComments(e, inputs))}>
      <div className="days" style={{ marginLeft: 'auto', marginRight: 'auto' }} />
      <TextField type="text" onChange={changeHandler} value={inputs.f_name} name="f_name" id="standard-basic" label="оставить комент " variant="standard" style={{ width: '100%', backgroundColor: 'white' }} />
      <Button type="submit" variant="contained" style={{ marginTop: '5%', width: '100%' }}>комент</Button>
    </form>
  );
}
