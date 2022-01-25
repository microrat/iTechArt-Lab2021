/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable react/prop-types */
import React from 'react';
import s from '../style.module.css';

class PizzaListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.pizza.id,
      name: props.pizza.name,
      desc: props.pizza.desc,
      size: {
        sm: {
          price: props.pizza.size.sm.price,
        },
        md: {
          price: props.pizza.size.md.price,
        },
        lg: {
          price: props.pizza.size.lg.price,
        },
      },
    };
    this.handleName = this.handleName.bind(this);
    this.handleDesc = this.handleDesc.bind(this);
    this.handleSmallSize = this.handleSmallSize.bind(this);
    this.handleMediumSize = this.handleMediumSize.bind(this);
    this.handleLargeSize = this.handleLargeSize.bind(this);
    this.deletePizza = this.deletePizza.bind(this);
    this.editPizza = this.editPizza.bind(this);
  }

  handleName(event) {
    this.setState({ name: event.target.value });
  }

  handleDesc(event) {
    this.setState({ desc: event.target.value });
  }

  handleSmallSize(event) {
    this.setState(state => (state.size.sm.price = event.target.value));
  }

  handleMediumSize(event) {
    this.setState(state => (state.size.md.price = event.target.value));
  }

  handleLargeSize(event) {
    this.setState(state => (state.size.lg.price = event.target.value));
  }

  deletePizza(event) {
    event.preventDefault();
    this.props.deletePizza(this.props.pizza.id);
  }

  editPizza(event) {
    event.preventDefault();
    this.props.editPizza(this.state, this.props.pizza);
    alert('Изменено');
  }

  render() {
    return (
      <form onSubmit={this.editPizza} className={s.admin__table__form}>
        <input
          type="text"
          className={s.admin__table__cell_input}
          value={this.state.name}
          onChange={this.handleName}
        />
        <input
          type="text"
          className={s.admin__table__cell_input}
          value={this.state.desc}
          onChange={this.handleDesc}
        />
        <input
          type="text"
          className={s.admin__table__cell_input}
          value={this.state.size.sm.price}
          onChange={this.handleSmallSize}
        />
        <input
          type="text"
          className={s.admin__table__cell_input}
          value={this.state.size.md.price}
          onChange={this.handleMediumSize}
        />
        <input
          type="text"
          className={s.admin__table__cell_input}
          value={this.state.size.lg.price}
          onChange={this.handleLargeSize}
        />

        <button type="submit">Изменить</button>
        <button onClick={this.deletePizza} type="button">
          Удалить
        </button>
      </form>
    );
  }
}

export default PizzaListItem;
