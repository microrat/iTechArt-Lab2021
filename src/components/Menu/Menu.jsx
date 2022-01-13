
import React from "react";
import { NavLink } from "react-router-dom";
import MenuItem from "./components/MenuItem.jsx";
import s from './style.module.css';

class Menu extends React.Component{
  render(){
    return(
    <div>
    <section className={s.slogan}>
      <h1 className={s.slogan__title_3}>Наше меню</h1>
    </section>
    <div className={s.menu}>
     {this.props.pizzas.map((item)=>(<MenuItem pizza={item}/>))}
    </div>
    <div className={s.add}>
    <NavLink className="button" to="/add">Добавить пиццу</NavLink>
    </div>
  </div>
  );
}
}


export default Menu;




