import * as React from 'react';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addOrdering } from '../redux/actions/orderActions';

export default function ItemFormModal({ input, setRent, setSend }) {
  const user = useSelector((state) => state.user);
  const product = useSelector((state) => state.prodItemPage);
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    f_name: '', l_name: '', email: '', telegram: '', phone: '', timing: '',
  });
  console.log(product);
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
  return (
    <form onSubmit={(e) => dispatch(addOrdering(e, inputs, user.id, product.id, setRent, setSend))}>
      <div className="days" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
        <p>{`Время, которое вы установили для аренды ${input.timing}`}</p>
      </div>
      <TextField type="text" onChange={changeHandler} value={inputs.f_name} name="f_name" id="standard-basic" label="Ваше имя" variant="standard" style={{ width: '100%', backgroundColor: 'white' }} />
      <TextField type="text" onChange={changeHandler} value={inputs.l_name} name="l_name" id="standard-basic" label="Ваша фамилия" variant="standard" style={{ width: '100%', backgroundColor: 'white' }} />
      <TextField type="text" onChange={changeHandler} value={inputs.email} name="email" id="standard-basic" label="Ваша почта" variant="standard" style={{ width: '100%', backgroundColor: 'white' }} />
      <TextField type="text" onChange={changeHandler} value={inputs.phone} name="phone" id="standard-basic" label="Ваш телефон" variant="standard" style={{ width: '100%', backgroundColor: 'white' }} />
      <TextField type="text" onChange={changeHandler} value={inputs.telegram} name="telegram" id="standard-basic" label="Ваш Телеграм" variant="standard" style={{ width: '100%', backgroundColor: 'white' }} />
      <TextField type="text" onChange={changeHandler} value={input.timing} name="telegram" id="standard-basic" label="Ваш Телеграм" variant="standard" style={{ width: '100%', backgroundColor: 'white' }} />
      <Button type="submit" variant="contained" style={{ marginTop: '5%', width: '100%' }}>Отправить</Button>
    </form>
  );
}
