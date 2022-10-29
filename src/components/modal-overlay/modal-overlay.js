import React, { memo } from 'react';
import styles from './modal-overlay.module.css';

function ModalOverlay({ children, onClose }) {
  const handleClose = (evt) => {
    if (evt.target === evt.currentTarget) {
      onClose();
    };
  };

  return (
    <div className={styles.overlay} onClick={handleClose} >
      {children}
    </div>
  )
};

export default memo(ModalOverlay);
