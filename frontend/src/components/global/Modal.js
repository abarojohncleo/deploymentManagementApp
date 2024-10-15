import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";



const ModalSelector = ({ open, handleClose, children, width=400 }) => {

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: width, // Adjust the width as needed
    maxHeight: '80vh', // Set a maximum height based on the viewport height
    bgcolor: 'background.paper',
    p: 3,
    borderRadius: 2,
    overflowY: 'auto', // Enable vertical scrolling
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>{children}</Box>
    </Modal>
  );
}

export default ModalSelector;
