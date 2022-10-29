import React from 'react';
import styles from './ingredient-details.module.css';

function IngredientDetails({ data }) {
  console.log(data)
  return (
    <>
      <img className="mb-4" src={data.image_large} />
      <h3 className="text text_type_main-medium mb-8">{data.name}</h3>
      <dl className={styles.list}>
        <dt className="text text_type_main-default text_color_inactive">Калории,ккал</dt>
        <dd className="text text_type_digits-default text_color_inactive">{data.calories}</dd>
        <dt className="text text_type_main-default text_color_inactive">Белки, г</dt>
        <dd className="text text_type_digits-default text_color_inactive">{data.proteins}</dd>
        <dt className="text text_type_main-default text_color_inactive">Жиры, г</dt>
        <dd className="text text_type_digits-default text_color_inactive">{data.fat}</dd>
        <dt className="text text_type_main-default text_color_inactive">Углеводы, г</dt>
        <dd className="text text_type_digits-default text_color_inactive">{data.carbohydrates}</dd>
      </dl>
    </>
  )
}

export default IngredientDetails;
