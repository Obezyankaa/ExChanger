import * as React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/actions/userAction';

export default function FormModalLog() {
  const [inputs, setInputs] = useState({ email: '', password: '' });
  const dispatch = useDispatch();
  const changeHandler = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div>
      <form onSubmit={(e) => dispatch(loginUser(e, inputs))}>
        <div className="form-conatainer" style={{ display: 'flex', flexDirection: 'column' }}>
          <Box
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <TextField name="email" onChange={changeHandler} id="standard-basic" label="Ваш e-mail" variant="standard" style={{ width: '100%' }} />
            <TextField type="password" name="password" onChange={changeHandler} id="standard-basic" label="Ваш пароль" variant="standard" style={{ width: '100%' }} />
          </Box>
          <Button type="submit" variant="contained" endIcon={<SendIcon />}>
            Отправить
          </Button>
        </div>
      </form>
    </div>
  );
}
