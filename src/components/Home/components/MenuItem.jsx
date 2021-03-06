import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';
import s from '../style.module.css';

const MenuItem = props => {
  const link = `${props.pizza.id}`;
  return (
    <div className={s.menu__item}>
      <p className={s.menu__title}>{props.pizza.name}</p>
      <img src={props.pizza.img} className={s.menu__pic} alt="pic" />
      <p className={s.menu__desc}>{props.pizza.desc}</p>
      <NavLink to={link} className="button menu__button">
        Подробнее
      </NavLink>
    </div>
  );
};

export default MenuItem;

MenuItem.propTypes = {
  pizza: PropTypes.object.isRequired,
};
