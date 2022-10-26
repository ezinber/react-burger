import React, { useEffect, useState } from 'react';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-constructor.module.css';

function BurgerConstructor({ data }) {
  const [ingredients, setIngredients] = useState([]);
  const [bun, setBun] = useState({});

  useEffect(() => {
    setIngredients(data.filter(i => i.type !== 'bun'));
    setBun(data.find(i => i.type === 'bun'));
  }, [data]);

  return (
    <section className={`${styles.section} pt-25 pr-4 pl-4`}>
      <ul className={styles.list}>
        <li className="mb-4">
          <ConstructorElement
            type="top"
            isLocked={true}
            text={`${bun.name} (верх)`}
            thumbnail={bun.image}
            price={bun.price}
          />
        </li>
        <li className={styles.inner_list_wrapper}>
          <ul className={styles.list}>
            {ingredients.map((item, index) => (
              <li className="mb-4">
                <ConstructorElement
                  text={item.name}
                  thumbnail={item.image}
                  price={item.price}
                  key={`${index}${item._id}`}
                />
              </li>
            ))}
          </ul>
        </li>
        <li className="mt-4">
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${bun.name} (низ)`}
            thumbnail={bun.image}
            price={bun.price}
          />
        </li>
      </ul>
        
    </section>
  )
}

export default BurgerConstructor;