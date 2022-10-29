import React, { useEffect, useState } from 'react';
import { getIngredients } from '../../utils/api';
import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../burger-constructor/burger-construcor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import IngredientDetails from '../ingredient-details/ingredient-details';
import ModalOverlay from '../modal-overlay/modal-overlay';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import styles from './app.module.css';

function App() {
  const [ingredients, setIngredients] = useState(null);

  useEffect(() => {
    getIngredients()
      .then((res) => setIngredients(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={styles.main}>
        {ingredients && (<>
          <BurgerIngredients data={ingredients} />
          <BurgerConstructor data={ingredients} />

          <ModalOverlay>
            <Modal title="Детали ингредиента">
              {/* <OrderDetails /> */}
              <IngredientDetails data={ingredients[0]} />
            </Modal>
          </ModalOverlay>
        </>)}
      </main>
    </div>
  )
}

export default App;
