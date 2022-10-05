import { TextField } from '@mui/material';
import React, { useState } from 'react';

export default function ItemFormModal() {
  const [inputs, setInputs] = useState({ comment: '' });
  const changeHandler = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <form>
      <TextField name="comment" onChange={changeHandler} id="standard-basic" label="Оставьте комментарий" variant="standard" style={{ width: '100%', backgroundColor: 'white' }} />
    </form>
  );
}
