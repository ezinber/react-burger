import React, { useEffect, useState } from 'react';
import { getIngredients } from '../../utils/api';
import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../burger-constructor/burger-construcor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import ModalOverlay from '../modal-overlay/modal-overlay';
import Modal from '../modal/modal';
import styles from './app.module.css';

function App() {
  const [ingredients, setIngredients] = useState(null);

  useEffect(() => {
    getIngredients()
      .then((res) => setIngredients(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={styles.main}>
        {ingredients && (<>
          <BurgerIngredients data={ingredients.data} />
          <BurgerConstructor data={ingredients.data} />
        </>)}
        <ModalOverlay children={<Modal />} />
      </main>
    </div>
  )
}

export default App;
