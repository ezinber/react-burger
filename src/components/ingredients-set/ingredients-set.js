import React from 'react';
import IngredientCard from '../ingredient-card/ingredient-card';
import styles from './ingredients-set.module.css';

function IngredientsSet({ ingredients }) {
  return (
    <li className="pb-10">
      <ul className={`${styles.list} pl-4 pr-4`}>
        {ingredients.map((ingredient, index) => (
          <IngredientCard ingredient={ingredient} key={`${index}${ingredient._id}`} />
        ))}
      </ul>
    </li>
  )
}

export default IngredientsSet;
