import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styles from './navigation-link.module.css';

function NavigationLink({ icon, link = '/', text }) {
  return (
    <a href={link} className={`${styles.link} pl-5 pr-5 pt-4 pb-4`}>
      {icon}
      <p className='text text_type_main-default ml-2'>
        {text}
      </p>
    </a>
  )
};

NavigationLink.propTypes = {
  icon: PropTypes.string,
  link: PropTypes.string.isRequired,
  text: PropTypes.string,
};

export default memo(NavigationLink);
