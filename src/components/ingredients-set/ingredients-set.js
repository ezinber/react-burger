import React from 'react';
import PropTypes from 'prop-types';
import IngredientCard from '../ingredient-card/ingredient-card';
import styles from './ingredients-set.module.css';

function IngredientsSet({ ingredients, title, handleClick }) {


  return (
    <>
      <h2 className="text text_type_main-medium mb-6">{title}</h2>
      <ul className={`${styles.list} pl-4 pr-4`}>
        {ingredients.map((ingredient, index) => (
          <IngredientCard
            ingredient={ingredient}
            key={`${index}${ingredient._id}`}
            handleClick={handleClick}
          />
        ))}
      </ul>
    </>
  )
};

IngredientsSet.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};

export default IngredientsSet;
