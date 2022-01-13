import s from './style.module.css';
import CartItem from './components/CartItem.jsx'

const Cart = (props) => {
  let clearCart = () => {
    props.clearCart();
  };
  return (
    <div className={s.cart}>
      <table className={s.cart__table}>
        <tr className={s.table__head}>
          <td>Название</td>
          <td>Размер</td>
          <td>Цена</td>
          <td>Удалить</td>
        </tr>
        {props.cart.map((item) => (
          <CartItem item={item} clearCartItem={props.clearCartItem}/>
        ))}
      </table>
      <div className={s.cart__price}>
        <h3>Итоговая стоимость</h3>
        <h2>руб.</h2>
      </div>
      <button className="add_button" onClick={clearCart}>
        Очистить корзину
      </button>
    </div>
  );
};

export default Cart;
