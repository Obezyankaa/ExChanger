import * as React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FormModalLog() {
  return (
    <form>
      <div className="form-conatainer" style={{ display: 'flex', flexDirection: 'column' }}>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <TextField id="standard-basic" label="Ваш e-mail" variant="standard" style={{ width: '100%' }} />
          <TextField id="standard-basic" label="Ваш пароль" variant="standard" style={{ width: '100%' }} />
        </Box>
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
      </div>
    </form>
  );
}