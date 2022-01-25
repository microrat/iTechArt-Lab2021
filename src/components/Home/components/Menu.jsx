import PropTypes from 'prop-types';
import React from 'react';
import { ButtonGroup } from '@material-ui/core/';
import MenuItem from './MenuItem';
import s from '../style.module.css';

class Menu extends React.Component {
  constructor() {
    super();
    this.state = {
      currentPage: 1,
      pizzasPerPage: 6,
      search: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(event) {
    this.setState({ search: event.target.value });
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id),
    });
  }

  render() {
    const indexOfLastPizza = this.state.currentPage * this.state.pizzasPerPage;
    const indexOfFirstPizza = indexOfLastPizza - this.state.pizzasPerPage;

    const filteredPizzas = this.props.pizzas.filter(pizza => {
      return pizza.name.toLowerCase().includes(this.state.search.toLowerCase());
    });

    const currentPizzas = filteredPizzas.slice(indexOfFirstPizza, indexOfLastPizza);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(this.props.pizzas.length / this.state.pizzasPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <button
          key={number}
          id={number}
          onClick={this.handleClick}
          className={s.page__button}
          type="button"
        >
          {number}
        </button>
      );
    });

    return (
      <div className={s.menu__content}>
        <section className={s.slogan}>
          <h1 className={s.slogan__title_3}>Наше меню</h1>
        </section>

        <div className={s.menu}>
          {currentPizzas.map(pizza => (
            <MenuItem key={pizza.id} pizza={pizza} />
          ))}
        </div>
        <div className={s.menu__page__buttons}>
          <ButtonGroup>{renderPageNumbers}</ButtonGroup>
        </div>
        <div className="container">
          <form className={s.search__form}>
            <label className={s.search__label} htmlFor="search">
              Поиск
            </label>
            <input type="text" placeholder="поиск..." onChange={this.handleSearch} />
          </form>
        </div>
      </div>
    );
  }
}

export default Menu;

Menu.propTypes = {
  pizzas: PropTypes.array.isRequired,
};
