import { Snackbar, Stack, Alert as MuiAlert } from '@mui/material';
import React from 'react';

const Alert = React.forwardRef((props, ref) => (
  <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
));

function Toast({ duration = 0, isOpen, onClose, message, variant }) {
  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={isOpen} autoHideDuration={duration} onClose={onClose}>
        <Alert onClose={onClose} severity={variant} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </Stack>
  );
}

export default Toast;
