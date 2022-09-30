import * as React from 'react';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormModalReg from './FormModalReg';

export default function ModalRegistration({ regActive }) {
  return (
    <div style={{
      height: '100vh', width: '100%', backgroundColor: 'black', opacity: '0.7', position: 'fixed', top: '0', left: '0',
    }}
    >
      <div
        className="modalwindow"
        style={{
          width: '40%', height: '60%', marginLeft: 'auto', marginRight: 'auto', marginTop: '10%', border: '3px solid rgba(0, 0, 0, 0.05)', borderRadius: '10px', backgroundColor: 'white',
        }}
      >
        <DialogTitle style={{ textAlign: 'center' }}>Регистрация</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <FormModalReg />
          </DialogContentText>
        </DialogContent>
      </div>
    </div>
  );
}
