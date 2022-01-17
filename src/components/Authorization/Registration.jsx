import s from "./style.module.css";
import React from "react";

export default function Registration() {
  return (
    <div className="container">
      <form className={`${s.form} ${s.form_registration}`}>
        <h1>Добро пожаловать!</h1>
        <h3>Введите данные для входа</h3>
        <div className={s.form__input}>
          <input id="name" className={s.form__input__field} type="text" placeholder="Имя" />
        </div>
        <div className={s.form__input}>
          <input id="email" className={s.form__input__field} type="text" placeholder="Фамилия" />
        </div>
        <div className={s.form__input}>
          <input id="email" className={s.form__input__field} type="text" placeholder="Email" />
        </div>
        <div className={s.form__input}>
          <input id="email" className={s.form__input__field} type="text" placeholder="Адрес" />
        </div>
        <div className={s.form__input}>
          <input id="email" className={s.form__input__field} type="text" placeholder="Пароль" />
        </div>
        <button type="submit" className={s.form__button}>
        Зарегестрироваться
        </button>
      </form>
    </div>
  );
}
