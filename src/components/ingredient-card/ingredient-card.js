import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { memo } from 'react';
import styles from './ingredient-card.module.css';

function IngredientCard({ ingredient }) {
  return (
    <li className={`${styles.card} `}>
      <img className="mb-1" src={ingredient.image} alt={ingredient.name} />
      <div className={styles.price}>
        <p className="text text_type_main-default">
          {ingredient.price}
        </p>
        <CurrencyIcon type="primary" />
      </div>
      <p className="text text_type_main-default  mt-1">{ingredient.name}</p>
    </li>
  )
}

export default memo(IngredientCard);
