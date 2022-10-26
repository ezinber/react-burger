import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { memo } from 'react';
import styles from './modal.module.css';

function Modal({ title = 'Title', onClose, children }) {
  return (
    <div className={`${styles.modal} pt-10 pr-10 pb-15 pl-10`}>
      <div className={styles.title_wrapper}>
        <h2 className="text text_type_main-large">{title}</h2>
        <CloseIcon type="primary"/>
      </div>
      {children}
    </div>
  )
}

export default memo(Modal);
