import React from "react";
import MenuItem from "./MenuItem.jsx";
import s from "../style.module.css";

import { ButtonGroup} from '@material-ui/core/';

class Menu extends React.Component {
  constructor() {
    super();
    this.state = {
      currentPage: 1,
      pizzasPerPage: 3
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  render() {
    const indexOfLastPizza = this.state.currentPage * this.state.pizzasPerPage;
    const indexOfFirstPizza = indexOfLastPizza - this.state.pizzasPerPage;
    const currentPizzas = this.props.pizzas.slice(indexOfFirstPizza, indexOfLastPizza);

    const renderPizzas = currentPizzas.map((pizza, index) => (<MenuItem key={index} pizza={pizza} />));

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(this.props.pizzas.length / this.state.pizzasPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (     
        <li key={number} id={number} onClick={this.handleClick} className={s.page__button}>
          {number}
        </li>
    
      );
    });

    return (
      <div className={s.menu__content}>
        <section className={s.slogan}>
          <h1 className={s.slogan__title_3}>Наше меню</h1>
        </section>
        <div className={s.menu}>
          {renderPizzas}
  
        </div>
        <div className={s.menu__page__buttons}>
        <ButtonGroup>
          {renderPageNumbers}
          </ButtonGroup>
          </div>
      </div>
    );
  }
}



export default Menu;
