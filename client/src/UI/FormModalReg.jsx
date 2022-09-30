import * as React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { signupUser } from '../redux/actions/userAction';

export default function FormModalReg({ setRegActive }) {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    f_name: '', l_name: '', password: '', email: '', photo: null, telegram: '', phone: '',
  });
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
  return (
    <form onSubmit={(e) => dispatch(signupUser(e, inputs, setRegActive))}>
      <div className="form-conatainer" style={{ display: 'flex', flexDirection: 'column' }}>
        <Box
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <TextField name="f_name" onChange={changeHandler} id="standard-basic" label="Ваше имя" variant="standard" style={{ width: '100%' }} />
          <TextField name="l_name" onChange={changeHandler} id="standard-basic" label="Ваша фамилия" variant="standard" style={{ width: '100%' }} />
          <TextField name="email" onChange={changeHandler} id="standard-basic" label="Ваш e-mail" variant="standard" style={{ width: '100%' }} />
          <TextField type="password" name="password" onChange={changeHandler} id="standard-basic" label="Ваш пароль" variant="standard" style={{ width: '100%' }} />
          <TextField name="phone" onChange={changeHandler} id="standard-basic" label="Ваш номер телефона" variant="standard" style={{ width: '100%' }} />
          <TextField name="telegram" onChange={changeHandler} id="standard-basic" label="Ваш Telegram" variant="standard" style={{ width: '100%' }} />
          <input type="file" name="photo" onChange={changeHandlerPhoto} />
        </Box>
        <Button type="submit" variant="contained" endIcon={<SendIcon />}>
          Отправить
        </Button>
      </div>
    </form>
  );
}
