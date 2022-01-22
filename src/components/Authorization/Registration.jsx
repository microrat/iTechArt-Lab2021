import s from "./style.module.css";
import React from "react";

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      surname: "",
      email: "",
      address: "",
      password: "",
    };
    this.handleName = this.handleName.bind(this);
    this.handleSurname = this.handleSurname.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleAddress = this.handleAddress.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleName(event) {
    this.setState({ name: event.target.value });
  }
  handleSurname(event) {
    this.setState({ surname: event.target.value });
  }
  handleEmail(event) {
    this.setState({ email: event.target.value });
  }
  handleAddress(event) {
    this.setState({ address: event.target.value });
  }

  handlePassword(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    let allowed = 0;
    event.preventDefault();
    this.props.userList.filter((obj) => {
      if (obj.email === this.state.email) {
        alert("Этот email уже занят");
        allowed = 0;
        return false;
      } else {
        allowed = 1;
        return true;
      }
    });
    if (allowed === 1) {
     const regEx= /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
      if(this.state.email.match(regEx) && this.state.password.length>=8){
      this.props.addUser(this.state);
      alert("Пользователь добавлен");}
      else{
        alert("Не валидный email или пароль");
      }
    }
    console.log(this.props.userList);
  }

  render() {
    return (
      <div className="container">
        <form className={`${s.form} ${s.form_registration}`} onSubmit={this.handleSubmit} >
          <h1>Добро пожаловать!</h1>
          <h3>Введите данные для входа</h3>
          <div className={s.form__input}>
            <input
              className={s.form__input__field}
              type="text"
              placeholder="Имя"
              onChange={this.handleName}
              value={this.state.name} />
          </div>
          <div className={s.form__input}>
            <input
              className={s.form__input__field}
              type="text"
              placeholder="Фамилия"
              onChange={this.handleSurname}
              value={this.state.surname} />
          </div>
          <div className={s.form__input}>
            <input
              className={s.form__input__field}
              type="text"
              placeholder="Email"
              onChange={this.handleEmail}
              value={this.state.email} />
          </div>
          <div className={s.form__input}>
            <input
              className={s.form__input__field}
              type="text"
              placeholder="Адрес"
              onChange={this.handleAddress}
              value={this.state.address} />
          </div>
          <div className={s.form__input}>
            <input
              className={s.form__input__field}
              type="text"
              placeholder="Пароль(min 8 symbols)"
              onChange={this.handlePassword}
              value={this.state.password} />
          </div>
          <button type="submit" className={s.form__button}>
            Зарегестрироваться
          </button>
        </form>
      </div>
    );
  }
}

export default Registration;
