import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteItemFromList } from '../redux/actions/productAction';

export default function DeleteModal({ deleter, setDeleter, argProduct }) {
  const navigate = useNavigate();
  const { name, id } = argProduct;

  console.log(id);
  console.log(name);

  const dispatch = useDispatch();

  const handleClose = () => {
    setDeleter(false);
  };

  const delClose = (id, navigate) => {
    dispatch(deleteItemFromList(id, navigate));
    setDeleter(false);
  };

  return (
    <div>
      <Dialog
        open={deleter}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Удаление товара
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Вы действительно хотите снять с доски объявление? Отменить данное изменение будет невозможно
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Отмена</Button>
          <Button onClick={delClose} autoFocus>
            Да, я хочу удалить этот товар
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
