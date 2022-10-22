import { memo } from 'react';
import styles from './ingredients-set.module.css';

function IngredientsSet({ ingredients }) {
  return (
    <li className="pb-10">
      <ul className={styles.list}>

      </ul>
    </li>
  )
}

export default memo(IngredientsSet);
