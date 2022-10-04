import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function Ucant({ cheker, setChecker, argProduct }) {
  const { name } = argProduct;
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClose = () => {
    setChecker(false);
  };
  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={cheker}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {`Хотите взять в аренду ${name}?`}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Аренда доступна только зарегестрированым или авторизированым пользователям.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Войти
          </Button>
          <Button style={{ textDecoration: 'none' }} onClick={handleClose} autoFocus>
            Зарегистрироваться
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
