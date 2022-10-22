import React, { memo, useState } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-ingredients.module.css';

function BurgerIngredients({  }) {
  const [current, setCurrent] = useState('bun');

  return (
    <section className="pt-10">
      <h1 className="text text_type_main-medium mb-5">Соберите бургер</h1>
        <ul className={`${styles.list} mb-10`}>
          <li>
            <Tab value="bun" active={current === 'bun'} onClick={setCurrent}>
              Булки
            </Tab>
          </li>
          <li>
            <Tab value="sauce" active={current === 'sauce'} onClick={setCurrent}>
              Соусы
            </Tab>
          </li>
          <li>
            <Tab value="stuffing" active={current === 'stuffing'} onClick={setCurrent}>
              Начинки
            </Tab>
          </li>
        </ul>
    </section>
  )
}

export default memo(BurgerIngredients);
