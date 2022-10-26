import React, { useEffect, useState } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-ingredients.module.css';
import IngredientsSet from '../ingredients-set/ingredients-set';

function BurgerIngredients({ data }) {
  const [current, setCurrent] = useState('bun');
  const [buns, setBuns] = useState([]);
  const [sauce, setSauce] = useState([]);
  const [main, setMain] = useState([]);

  useEffect(() => {
    setBuns(data.filter((i) => i.type === 'bun'));
    setSauce(data.filter((i) => i.type === 'sauce'));
    setMain(data.filter((i) => i.type === 'main'));
  }, [data])

  return (
    <section className={`${styles.section} pt-10`}>
      <h1 className="text text_type_main-large mb-5">Соберите бургер</h1>
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
        <ul className={`${styles.column_list} pt-10 pb-10`}>
          <li className="pb-2">
            <IngredientsSet ingredients={buns} title="Булки" />
          </li>
          <li className="pb-2">
            <IngredientsSet ingredients={sauce} title="Соусы" />
          </li>
          <li className="pb-2">
            <IngredientsSet ingredients={main} title="Начинки" />
          </li>
        </ul>
    </section>
  )
}

export default BurgerIngredients;
