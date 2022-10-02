import * as React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Autocomplete } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allCategories } from '../redux/actions/categoriesAction';
import { addProduct } from '../redux/actions/productAction';

export default function FormModalAddProd() {
  const dispatch = useDispatch();
  const categoriesArr = useSelector((state) => state.categories);
  useEffect(() => {
    dispatch(allCategories());
  }, []);
  const [inputs, setInputs] = useState({
    name: '', category: '', description: '', price: '', location: '', timing: '',
  });
  const changeHandler = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const submitHendler = (e) => dispatch(addProduct(e, inputs, setInputs));

  return (
    <form onSubmit={submitHendler}>
      <div className="form-conatainer" style={{ display: 'flex', flexDirection: 'column' }}>
        <Box
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <TextField name="name" value={inputs.name} onChange={changeHandler} label="Название товара" variant="standard" style={{ width: '100%', backgroundColor: 'white' }} type="text" />
          <Autocomplete
            style={{ width: '100%', backgroundColor: 'white' }}
            options={categoriesArr}
            getOptionLabel={(option) => option.name}
            id="clear-on-escape"
            onChange={(e) => setInputs((prev) => ({
              ...prev,
              category: e.target.innerHTML,
            }))}
            clearOnEscape
            renderInput={(params) => (
              <TextField
                {...params}
                name="category"
                label="Категория"
                value={inputs.category}
                onChange={changeHandler}
                variant="standard"
              />
            )}
          />
          <TextField name="description" value={inputs.description} onChange={changeHandler} label="Описание" variant="standard" style={{ width: '100%', backgroundColor: 'white' }} type="text" />
          <TextField name="price" value={inputs.price} onChange={changeHandler} label="Цена за день использования" variant="standard" style={{ width: '100%', backgroundColor: 'white' }} type="text" />
          <TextField name="location" value={inputs.location} onChange={changeHandler} label="Адрес" variant="standard" style={{ width: '100%', backgroundColor: 'white' }} type="text" />
          <TextField name="timing" value={inputs.timing} onChange={changeHandler} label="Максимальное время аренды" variant="standard" style={{ width: '100%', backgroundColor: 'white' }} type="text" />

        </Box>
        <Button type="submit" variant="contained" endIcon={<SendIcon />}>
          Отправить
        </Button>
      </div>
    </form>
  );
}
