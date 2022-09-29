import * as React from 'react';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormModalReg from './FormModalReg';

export default function ModalRegistration() {
  return (
    <div
      className="modalwindow"
      style={{
        width: '40%', height: '60%', marginLeft: 'auto', marginRight: 'auto', marginTop: '10%', border: '3px solid rgba(0, 0, 0, 0.05)', borderRadius: '10px',
      }}
    >
      <DialogTitle style={{ textAlign: 'center' }}>Регистрация</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          <FormModalReg />
        </DialogContentText>
      </DialogContent>
    </div>
  );
}
