import React from "react";
import { NavLink } from "react-router-dom";
import s from '../style.module.css';

const HeaderPic = () => {
  return (
    <section className={s.headerpic}>
      <h1 className={s.headerpic__title_1}>Доставка пиццы</h1>
      <h3 className={s.headerpic__title_3}>по всему городу</h3>
      <NavLink className="button" to="#">
        МЕНЮ
      </NavLink>
    </section>
  );
};

export default HeaderPic;


