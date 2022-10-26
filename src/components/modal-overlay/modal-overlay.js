import { memo } from 'react';
import styles from './modal-overlay.module.css';

function ModalOverlay({ children }) {
  return (
    <div className={styles.overlay}>
      {children}
    </div>
  )
}

export default memo(ModalOverlay);
