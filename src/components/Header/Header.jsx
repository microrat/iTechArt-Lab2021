import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './style.module.css';

const Header = () => {
  return (
    <nav className={s.nav}>
      <h2 className={s.nav__title}>Pollly Pizza</h2>
      <ul className={s.nav__list}>
        <li className={s.nav__item}>
          <NavLink className={s.nav__link} to="/">
            Главная
          </NavLink>
        </li>
        <li className={s.nav__item}>
          <NavLink className={s.nav__link} to="/cart">
            Корзина
          </NavLink>
        </li>
        <li className={s.nav__item}>
          <NavLink className={s.nav__link} to="/users">
            Пользователи
          </NavLink>
        </li>
        <li className={s.nav__item}>
          <NavLink className={s.nav__link} to="/pizzas">
            Пиццы
          </NavLink>
        </li>
        <li className={s.nav__item}>
          <NavLink className={s.nav__link} to="/login">
            Вход
          </NavLink>
        </li>
        <li className={s.nav__item}>
          <NavLink className={s.nav__link} to="/registration">
            Регистрация
          </NavLink>
        </li>
        <li className={s.nav__item}>
          <NavLink className={s.nav__link} to="/profile">
            Профиль
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
