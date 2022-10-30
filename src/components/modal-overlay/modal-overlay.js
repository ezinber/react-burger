import React, { memo } from 'react';
import PropTypes from 'prop-types';
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

ModalOverlay.propTypes = {
  children: PropTypes.element.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default memo(ModalOverlay);
