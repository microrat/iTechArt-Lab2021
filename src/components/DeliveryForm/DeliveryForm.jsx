import React from "react";
import OrderItem from "./components/OrderItem";
import s from "./style.module.css";

class DeliveryForm extends React.Component {
    constructor(props) {
        super(props);
    this.state={
        currentUser:this.props.currentUser,
        order:this.props.cart,
    }
    }

  render() {
    return (
   <div className="container">
       <div className={s.delivery__form}>
           <div className={s.delivery__form__item}>
               <table className={s.order__table}>
                   <thead>
                   <td>Название</td>
                   <td>Размер</td>
                   <td>Цена</td>
                   <td>Действия</td>
                   </thead>
               <tbody>
               {this.props.cart.map(item=><OrderItem item={item} key={item.uniqueId}/>)}
               </tbody>
               </table>
           </div>
           <div className={s.delivery__form__item}>
           <div className={s.profile__container}>
      <form onSubmit={this.editUser} className={s.profile_form}>
        <label>Имя </label>
      <input type="text" className={s.profile__field} value={this.state.name} onChange={this.handleName} />
      <label>Фамилия </label>
       <input type="text" className={s.profile__field} value={this.state.surname} onChange={this.handleSurname} />
       <label>Email</label>
       <input type="text" className={s.profile__field} value={this.state.email} onChange={this.handleEmail}/>
       <label>Адрес</label>
       <input type="text" className={s.profile__field} value={this.state.address} onChange={this.handleAddress}/>   
       <label>Пароль</label>
       <input type="text" className={s.profile__field} value={this.state.password} onChange={this.handlePassword}/>   
         <button type="submit" className="button add_button">Изменить</button>
       </form>
       </div>
           </div>

       </div>
   </div>
    );
  }
}

export default DeliveryForm;
