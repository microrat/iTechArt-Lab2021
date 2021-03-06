import PropTypes from 'prop-types';
import React from 'react';
import s from './style.module.css';
import PizzaListItem from './components/PizzaListItem';

class PizzaList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.pizzas.length + 1,
      name: '',
      desc: '',
      size: {
        sm: {
          price: '',
        },
        md: {
          price: '',
        },
        lg: {
          price: '',
        },
      },
    };

    this.handleName = this.handleName.bind(this);
    this.handleDesc = this.handleDesc.bind(this);
    this.handleSmallSize = this.handleSmallSize.bind(this);
    this.handleMediumSize = this.handleMediumSize.bind(this);
    this.handleLargeSize = this.handleLargeSize.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleName(event) {
    this.setState({ name: event.target.value });
  }

  handleDesc(event) {
    this.setState({ desc: event.target.value });
  }

  handleSmallSize(event) {
    this.setState(() => {
      const smPrice = event.target.value;
      return { sm: { price: smPrice } };
    });
  }

  handleMediumSize(event) {
    this.setState(() => {
      const mdPrice = event.target.value;
      return { md: { price: mdPrice } };
    });
  }

  handleLargeSize(event) {
    this.setState(() => {
      const lgPrice = event.target.value;
      return { lg: { price: lgPrice } };
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addPizza(this.state);
    alert('Новая пицца добавлена');
  }

  render() {
    return (
      <div className="container">
        <div className={s.admin__container}>
          {this.props.pizzas.map(pizza => (
            <PizzaListItem
              key={pizza.id}
              pizza={pizza}
              deletePizza={this.props.deletePizza}
              editPizza={this.props.editPizza}
            />
          ))}

          <div className={s.admin__container}>
            <form onSubmit={this.handleSubmit}>
              <label>
                Название:
                <input
                  type="text"
                  className={s.admin__table__form_input}
                  onChange={this.handleName}
                  value={this.state.name}
                />
              </label>
              <label>
                Описание:
                <input
                  type="text"
                  className={s.admin__table__form_input}
                  onChange={this.handleDesc}
                  value={this.state.desc}
                />
              </label>
              <label>
                Цена маленькой:
                <input
                  type="text"
                  className={s.admin__table__form_input}
                  onChange={this.handleSmallSize}
                  value={this.state.size.sm.price}
                />
              </label>
              <label>
                Цена средней:
                <input
                  type="text"
                  className={s.admin__table__form_input}
                  onChange={this.handleMediumSize}
                  value={this.state.size.md.price}
                />
              </label>
              <label>
                Цена большой:
                <input
                  type="text"
                  className={s.admin__table__form_input}
                  onChange={this.handleLargeSize}
                  value={this.state.size.lg.price}
                />
              </label>
              <input type="submit" value="Добавить" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default PizzaList;

PizzaList.propTypes = {
  pizzas: PropTypes.array.isRequired,
  editPizza: PropTypes.func.isRequired,
  deletePizza: PropTypes.func.isRequired,
  addPizza: PropTypes.func.isRequired,
};
