import { memo } from 'react';
import styles from './app-header.module.css';
import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import NavigationLink from '../navigation-link/navigation-link';

function AppHeader({  }) {
  return (
    <header className={`${styles.header} pt-4 pb-4`}>
      <nav className={styles.header__nav}>
        <ul className={styles.header__list}>
          <li className='mr-2'>
            <NavigationLink
              icon={<BurgerIcon />}
              text='Конструктор'
            />
          </li>
          <li>
            <NavigationLink
              icon={<ListIcon />}
              text='Лента&nbsp;заказов'
            />
          </li>
          <li style={{marginLeft: 'auto'}}>
            <NavigationLink
              icon={<ProfileIcon />}
              text='Личный&nbsp;кабинет'
            />
          </li>
        </ul>
      </nav>
      <Logo />
    </header>
  )
}

export default memo(AppHeader);
