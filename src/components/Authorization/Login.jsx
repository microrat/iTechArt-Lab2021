import React from "react";
import { Link } from "react-router-dom";
import s from "./style.module.css";

export default function Login() {
  return (
    <div className="container">
      <form className={`${s.form} ${s.form_login}`}>
        <h1>Добро пожаловать!</h1>
        <h3>Введите данные для входа</h3>
        <div className={s.form__input}>
          <input id="email" className={s.form__input__field} type="text" placeholder="Email" />
        </div>
        <div className={s.form__input}>
          <input id="email" className={s.form__input__field} type="text" placeholder="Пароль" />
        </div>
        <button type="submit" className={s.form__button}>
        Войти
        </button>
        <h5>Если у вас нет аккаунта, зарегистрируйтесь в приложении </h5>
       <Link to="/registration" className={s.form__link}>Регистрация</Link>
      </form>
    </div>
  );
}
