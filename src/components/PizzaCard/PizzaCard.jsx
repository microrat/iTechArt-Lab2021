import React, { useState } from "react";
import { useParams } from "react-router-dom";
import s from "./style.module.css";

const PizzaCard = (props) => {
  const[state,setState]=useState({size:""});
  let idParam = useParams();
  let id = idParam.id - 1;

  let addToCart = () => {
    let cartitem = {...props.pizzas[id]};
    if(state.size===""){
      alert("Выберете размер");
      return 1;
    }
    cartitem.currentSize = state.size;
    if(state.size==="sm")cartitem.currentPrice=props.pizzas[id].size.sm.price;
    else if(state.size==="md")cartitem.currentPrice=props.pizzas[id].size.md.price;
    else cartitem.currentPrice=props.pizzas[id].size.lg.price;
    console.log(props.cart.length);
    cartitem.uniqueId = props.cart.length + 1;
    
    console.log(cartitem);
    props.addToCart(cartitem);
    alert("добавлено в корзину");
  };

  const handleChange = (event) => {
    setState({size:event.target.value})
  };

  return (
    <div className={s.card}>
      <div className={s.card__content}>
        <div className={s.card__item}>
        <img className={s.card__pic} src={props.pizzas[id].img} alt="pic" />
        </div>
        <div className={s.card__item}>
          <h1 className={s.item__title}>{props.pizzas[id].name}</h1>
          <p className={s.item__descreption}>{props.pizzas[id].desc}</p>
          <form>
            <input
              type="radio"
              value="sm"
              id="sm"
              onChange={handleChange}
              name="size"
            />
            <label>Маленькая - {props.pizzas[id].size.sm.price} руб.</label>
            <input
              type="radio"
              value="md"
              id="md"
              onChange={handleChange}
              name="size"
              
            />
            <label>Средняя - {props.pizzas[id].size.md.price} руб.</label>
            <input
              type="radio"
              value="lg"
              id="lg"
              onChange={handleChange}
              name="size"
            />
            <label>Большая - {props.pizzas[id].size.lg.price} руб.</label>
          </form>
          <button className={s.card__button} onClick={addToCart}>
            Добавить в корзину
          </button>
        </div>
      </div>
    </div>
  );
};

export default PizzaCard;
