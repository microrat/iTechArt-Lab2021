import React from "react";
import { Link } from "react-router-dom";
import s from "./style.module.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      surname: "",
      email: "",
      address: "",
      password: "",
    };
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmail(event) {
    this.setState({ email: event.target.value });
  }

  handlePassword(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (Object.keys(this.props.currentUser).length === 0){
      let user = this.props.userList.find( (user) => user.email === this.state.email );
      console.log(user);
      if(user !== undefined){
        if (user.password === this.state.password) {
          this.props.setCurrentUser(user);
          alert("OK");
      }else{
        alert("Неправлено введен пароль или имейл");
        return 1;
      }
    }else{
      alert("Такого пользователя нет");
      return 1;
    }
  }
    else{
      alert("Вход уже был выполнен");
    }
  }

  render() {
    return (
      <div className="container">
        <form
          className={`${s.form} ${s.form_login}`}
          onSubmit={this.handleSubmit}
        >
          <h1>Добро пожаловать!</h1>
          <h3>Введите данные для входа</h3>
          <div className={s.form__input}>
            <input
              className={s.form__input__field}
              type="text"
              placeholder="Email"
              onChange={this.handleEmail}
              value={this.state.email}
            />
          </div>
          <div className={s.form__input}>
            <input
              className={s.form__input__field}
              type="text"
              placeholder="Пароль"
              onChange={this.handlePassword}
              value={this.state.password}
            />
          </div>
          <button type="submit" className={s.form__button}>
            Войти
          </button>
          <h5>Если у вас нет аккаунта, зарегистрируйтесь в приложении </h5>
          <Link to="/registration" className={s.form__link}>
            Регистрация
          </Link>
        </form>
      </div>
    );
  }
}

export default Login;
