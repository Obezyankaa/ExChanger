import * as React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { userUpdater } from '../redux/actions/usersAction';

export default function UpdateForm() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    f_name: '', l_name: '', email: '', photo: '', telegram: '', phone: '',
  });
  useEffect(() => {
    const newInputs = { ...user };
    delete newInputs.id;
    setInputs(newInputs);
  }, [user]);
  const changeHandler = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const changeHandlerPhoto = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.files[0],
    }));
  };
  console.log(inputs);
  return (
    <form onSubmit={(e) => dispatch(userUpdater(e, inputs, user.id))}>
      <div className="form-conatainer" style={{ display: 'flex', flexDirection: 'column' }}>
        <Box
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <TextField name="f_name" onChange={changeHandler} id="standard-basic" value={inputs.f_name} label="Новое имя" variant="standard" style={{ width: '100%' }} />
          <TextField name="l_name" onChange={changeHandler} id="standard-basic" value={inputs.l_name} label="Новая фамилия" variant="standard" style={{ width: '100%' }} />
          <TextField name="email" onChange={changeHandler} id="standard-basic" value={inputs.email} label="Новая почта" variant="standard" style={{ width: '100%' }} />
          <TextField name="phone" onChange={changeHandler} id="standard-basic" value={inputs.phone} label="Новый телефон" variant="standard" style={{ width: '100%' }} />
          <TextField name="telegram" onChange={changeHandler} id="standard-basic" value={inputs.telegram} label="Новый телеграм" variant="standard" style={{ width: '100%' }} />
          <Button
            variant="contained"
            component="label"
          >
            Загрузите новое фото
            <input
              name="photo"
              type="file"
              hidden
              onChange={changeHandlerPhoto}
            />
          </Button>
        </Box>
        <Button type="submit" variant="contained" endIcon={<SendIcon />}>
          Отправить
        </Button>
      </div>
    </form>
  );
}
