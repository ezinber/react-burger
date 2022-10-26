import React, { useEffect, useState } from 'react';
import { Button, ConstructorElement, CurrencyIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-constructor.module.css';

function BurgerConstructor({ data }) {
  const [ingredients, setIngredients] = useState([]);
  const [bun, setBun] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setIngredients(data.filter(i => i.type !== 'bun'));
    setBun(data.find(i => i.type === 'bun'));
    setTotalPrice(data.reduce((total, item) => {
      return total + item.price;
    }, 0));
  }, [data]);

  return (
    <section className={`${styles.section} pt-25 pl-4`}>
      <ul className={`${styles.list} mb-10`}>
        <li className="ml-8 mb-4">
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
              <li className="mb-4" key={`${index}${item._id}`}>
                <DragIcon type="primary" />
                <ConstructorElement
                  text={item.name}
                  thumbnail={item.image}
                  price={item.price}
                />
              </li>
            ))}
          </ul>
        </li>
        <li className="ml-8 mt-4">
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${bun.name} (низ)`}
            thumbnail={bun.image}
            price={bun.price}
          />
        </li>
      </ul>
      <div className={styles.button_wrapper}>
        <p className="text text_type_digits-medium mr-10">
          {totalPrice}
          <span className="ml-2">
            <CurrencyIcon type="primary" />
          </span>
        </p>
        <Button type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </section>
  )
}

export default BurgerConstructor;