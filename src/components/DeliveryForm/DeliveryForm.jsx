import React from "react";
import OrderItem from "./components/OrderItem";
import s from "./style.module.css";

class DeliveryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      name: this.props.currentUser.name,
      surname: this.props.currentUser.surname,   
      address: this.props.currentUser.address,
      order:this.props.cart,
      payType:"",
      promo:"",
      time:"",
    };
    this.handlePay = this.handlePay.bind(this);
    this.handleAddress = this.handleAddress.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePromo = this.handlePromo.bind(this);
    this.handleTime = this.handleTime.bind(this);
    this.handleOrder = this.handleOrder.bind(this);
  }
handleAddress(event){
this.setState({ address:event.target.value})
}
handleSubmit(event){
event.preventDefault();
alert("Изменено");
}
handlePay(event) {
  event.preventDefault();
  this.setState({payType:event.target.value})
}

handlePromo(event) {
  event.preventDefault();
  this.setState({promo:event.target.value})
}

handleTime(event) {
  event.preventDefault();
  this.setState({time:event.target.value})
}

handleOrder(){
console.log(this.state);
alert("OK");
}

  render() {
    return (
      <div className="container">
        <div className={s.delivery__form}>
          <table className={s.delivery__form__table}>
            <thead>
              <td className={s.delivery__form__table__item}>Название</td>
              <td className={s.delivery__form__table__item}>Размер</td>
              <td className={s.delivery__form__table__item}>Цена</td>
              <td className={s.delivery__form__table__item}>Действия</td>
            </thead>
            <tbody>
              {this.props.cart.map((item) => (
                <OrderItem item={item} key={item.uniqueId} />
              ))}
              <tr>
                <td colspan="4">
                  <form  className={s.form} onSubmit={this.handleSubmit}>
                    <label>Имя </label>
                    <input type="text" className={s.form__field} value={this.state.name} disabled="disabled"/>
                    <label>Фамилия </label>
                    <input type="text" className={s.form__field} value={this.state.surname} disabled="disabled"/>
                    <label>Адрес</label>
                    <input type="text" className={s.form__field} value={this.state.address} onChange={this.handleAddress}/>
                    <button type="submit" className="button add_button">
                      Изменить
                    </button>
                  </form>
                </td>
              </tr>
              <tr>
                <td className={s.form__cell} colspan="4">
                  <form className={s.form__pay}>
                    <input type="radio" name="pay" value="courier" onChange={this.handlePay} />
                    <label>Курьеру</label>
                    <input type="radio" name="pay" value="card" onChange={this.handlePay} />
                    <label>Картой</label>
                  </form>
                  <form className={s.form__pay} onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.promo} placeholder="промокод" className={s.form__field} onChange={this.handlePromo}/>
                    <button type="submit">OK</button>
                  </form>
                  <form className={s.form__pay} onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.time} placeholder="время" className={s.form__field}  onChange={this.handleTime}/>
                    <button type="submit">OK</button>
                  </form>
                  <form className={s.form__pay}>
                    <input type="radio" name="time" value="fast" id="time" onChange={this.handleTime}/>
                    <label>Как можно скорее</label>
                  </form>
                </td>
              </tr>
            </tbody>
          </table>
          <button onClick={this.handleOrder}>Заказать</button>
        </div>
      </div>
    );
  }
}

export default DeliveryForm;
