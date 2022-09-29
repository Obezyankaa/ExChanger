import * as React from 'react';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormModalLog from './FormModalLog';

export default function ModalLog() {
  return (
    <div
      className="modalwindow"
      style={{
        width: '40%', height: '60%', marginLeft: 'auto', marginRight: 'auto', marginTop: '10%', border: '3px solid rgba(0, 0, 0, 0.05)', borderRadius: '10px',
      }}
    >
      <DialogTitle style={{ textAlign: 'center' }}>Авторизация</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          <FormModalLog />
        </DialogContentText>
      </DialogContent>
    </div>
  );
}
