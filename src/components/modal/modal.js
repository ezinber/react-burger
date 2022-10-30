import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../modal-overlay/modal-overlay';
import styles from './modal.module.css';

function Modal({ title = '', onClose, children }) {
  return createPortal((
    <ModalOverlay onClose={onClose}>
      <div className={`${styles.modal} pt-10 pr-10 pl-10`}>
        <div className={styles.title_wrapper}>
          <CloseIcon type="primary" onClick={onClose} />
          {title && <h2 className="text text_type_main-large">{title}</h2>}
        </div>
        {children}
      </div>
    </ModalOverlay>
  ), document.getElementById('modal-root'))
};

Modal.propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
}

export default memo(Modal);
