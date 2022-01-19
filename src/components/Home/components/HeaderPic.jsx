import React from "react";
import { Link } from "react-router-dom";
import s from '../style.module.css';

const HeaderPic = () => {
  return (
    <section className={s.headerpic}>
      <h1 className={s.headerpic__title_1}>Доставка пиццы</h1>
      <h3 className={s.headerpic__title_3}>по всему городу</h3>
      <Link className="button" to="#">
        МЕНЮ
      </Link>
    </section>
  );
};

export default HeaderPic;


