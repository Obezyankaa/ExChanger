import { DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import React from 'react';
import FormModalAddProd from './FormModalAddProd';

export default function ModalAddProd({ setAddProdActive }) {
  return (
    <div
      style={{
        height: '100vh', width: '100%', backgroundColor: 'black', opacity: '0.9', position: 'fixed', top: '0', left: '0', zIndex: '100',
      }}
      onClick={(e) => {
        e.stopPropagation();
        setAddProdActive(false);
      }}
    >
      <div
        className="modalwindow"
        style={{
          width: '40%', height: '60%', marginLeft: 'auto', marginRight: 'auto', marginTop: '10%', border: '3px solid rgba(0, 0, 0, 0.05)', borderRadius: '10px', backgroundColor: 'white', opacity: '1',
        }}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <DialogTitle style={{ textAlign: 'center' }}>Добавить товар</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <FormModalAddProd setAddProdActive={setAddProdActive} />
          </DialogContentText>
        </DialogContent>
      </div>
    </div>
  );
}
