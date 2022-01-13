import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './style.module.css';

const Header=()=>{
    return (
      <nav className={s.nav}>
    <h2 className={s.nav__title}>Pollly Pizza</h2>
    <ul className={s.nav__list}>
      <li className={s.nav__item}>
        <NavLink className={s.nav__link} to="/">Главная</NavLink>
      </li>
      <li className={s.nav__item}>
        <NavLink className={s.nav__link} to="/menu">Меню</NavLink>
      </li>
      <li className={s.nav__item}>
      <NavLink className={s.nav__link} to="/cart">Корзина</NavLink>
      </li>
    </ul>
  </nav>
    );
  }

  export default Header;




  