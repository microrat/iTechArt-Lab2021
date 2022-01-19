import React from "react";
import { Link } from "react-router-dom";
import MenuItem from "./MenuItem.jsx";
import s from "../style.module.css";

class Menu extends React.Component {
  render() {
    return (
      <div>
        <section className={s.slogan}>
          <h1 className={s.slogan__title_3}>Наше меню</h1>
        </section>
        <div className={s.menu}>
          {this.props.pizzas.map((item) => (<MenuItem key={item.id} pizza={item} />))}
        </div>
        <div className={s.add}>
          <Link className="button" to="/add">
            Добавить пиццу
          </Link>
        </div>
      </div>
    );
  }
}

export default Menu;
