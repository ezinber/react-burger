import React, { useEffect, useState } from 'react';
import { getIngredients } from '../../utils/api';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
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
        {ingredients && <BurgerIngredients ingredients={ingredients.data} />}

      </main>
    </div>
  )
}

export default App;
