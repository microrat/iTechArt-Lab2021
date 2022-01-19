import React from "react";
import { NavLink } from "react-router-dom";
import s from "../style.module.css";

const MenuItem = (props) => {
  let link = `${props.pizza.id}`;
  return (
    <div className={s.menu__item}>
      <p className={s.menu__title}>{props.pizza.name}</p>
      <p className={s.menu__desc}>{props.pizza.desc}</p>
      <NavLink to={link} className="button menu__button">
        Подробнее
      </NavLink>
    </div>
  );
};
//<img src={props.img} className={s.menu__pic}></img>
export default MenuItem;
