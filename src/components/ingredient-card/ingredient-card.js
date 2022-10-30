import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './ingredient-card.module.css';

function IngredientCard({ ingredient, handleClick }) {
  return (
    <li className={`${styles.card} mb-8`} onClick={() => handleClick(ingredient)}>
      <img className="mb-1" src={ingredient.image} alt={ingredient.name} />
      <div className={styles.price}>
        <p className="text text text_type_digits-default">
          {ingredient.price}
        </p>
        <CurrencyIcon type="primary" />
      </div>
      <p className="text text_type_main-default  mt-1">{ingredient.name}</p>
    </li>
  )
};

IngredientCard.propTypes = {
  ingredient: PropTypes.object.isRequired,
  handleClick: PropTypes.func,
}

export default memo(IngredientCard);
