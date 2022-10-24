import React, { useEffect, useState } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-ingredients.module.css';
import IngredientsSet from '../ingredients-set/ingredients-set';

function BurgerIngredients({ ingredients }) {
  const [current, setCurrent] = useState('bun');
  const [buns, setBuns] = useState([]);
  const [sauce, setSauce] = useState([]);
  const [main, setMain] = useState([]);

  useEffect(() => {
    setBuns(ingredients.filter((i) => i.type === 'bun'));
    setSauce(ingredients.filter((i) => i.type === 'sauce'));
    setMain(ingredients.filter((i) => i.type === 'main'));
  }, [ingredients])

  return (
    <section className={`${styles.section} pt-10`}>
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
            <Tab value="main" active={current === 'main'} onClick={setCurrent}>
              Начинки
            </Tab>
          </li>
        </ul>
        <ul className={styles.column_list}>
          <IngredientsSet ingredients={buns} />
          <IngredientsSet ingredients={sauce} />
          <IngredientsSet ingredients={main} />
        </ul>
    </section>
  )
}

export default BurgerIngredients;
