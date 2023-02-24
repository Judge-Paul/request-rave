import React, { useEffect, useState } from 'react';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function ConfirmModal({ showModal, confirmSelection }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(showModal);
  }, [showModal]);

  const handleClose = () => {
    confirmSelection(false)
    setOpen(false);
  };

  const handleConfirm = () => {
    confirmSelection(true)
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <Box sx={{ bgcolor: 'background.paper', p: 2, maxWidth: 400 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderRadius: '10px' }}>
          <Typography variant="h6" component="h2">
            Confirm Request
          </Typography>
          <Button onClick={handleClose}>X</Button>
        </Box>
        <Typography sx={{ mt: 2 }}>
          Do you want to request for this song to be played? If you do so, you won't be able to request another song be played for the next 5 minutes.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
          <Button variant="contained" onClick={handleClose} sx={{ mr: 1 }}>
            Cancel
          </Button>
          <Button variant="contained" onClick={handleConfirm} sx={{ bgcolor: 'green', color: 'white' }}>
            Request
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
