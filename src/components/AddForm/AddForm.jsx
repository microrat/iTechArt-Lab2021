import React from "react";
import { Link } from "react-router-dom";
import s from './style.module.css';

class AddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id:props.state.pizzas.length+1,
      name: "",
      desc:
        "",
      size: {
        sm: {
          price: "",
        },
        md: {
          price: "",
        },
        lg: {
          price: "",
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
    this.setState( (state)=>(state.size.sm.price= event.target.value ));
  }
  handleMediumSize(event) {
    this.setState( (state)=>(state.size.md.price= event.target.value ));
  }
  handleLargeSize(event) {
    this.setState( (state)=>(state.size.lg.price= event.target.value ));
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.addPizza(this.state);
    alert("Новая пицца добавлена");
  }
  render() {
    return (
      <div className="container">
      <form onSubmit={this.handleSubmit} className={s.form}>
        <label className={s.label}>
          Название:
          <input type="text" value={this.state.name} onChange={this.handleName} />
        </label>
        <label className={s.label}>
          Описание:
          <input type="text" value={this.state.desc} onChange={this.handleDesc} />
        </label>
        <label className={s.label}>
          Цена маленькой:
          <input type="text" value={this.state.size.sm.price} onChange={this.handleSmallSize} />
        </label>
        <label className={s.label}>
          Цена средней:
          <input type="text" value={this.state.size.md.price} onChange={this.handleMediumSize} />
        </label>
        <label className={s.label}>
          Цена большой:
          <input type="text" value={this.state.size.lg.price} onChange={this.handleLargeSize} />
        </label>
        <input type="submit" value="Отправить" className={s.form__button}/>
       <Link to="/menu"className={s.form__button} > Назад</Link>
      </form>
      </div>
    );
  }
}

export default AddForm;
