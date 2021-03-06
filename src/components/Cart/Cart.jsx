import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import s from './style.module.css';
import CartItem from './components/CartItem';

const Cart = props => {
  const clearCart = () => {
    console.log(props.cart);
    props.clearCart();
  };
  return (
    <div className={s.cart}>
      <table className={s.cart__table}>
        <thead>
          <tr className={s.table__head}>
            <td className={s.cart_table_td}>Название</td>
            <td className={s.cart_table_td}>Размер</td>
            <td className={s.cart_table_td}>Цена</td>
            <td className={s.cart_table_td}>Удалить</td>
          </tr>
        </thead>
        <tbody>
          {props.cart.map(item => (
            <CartItem item={item} key={item.uniqueId} clearCartItem={props.clearCartItem} />
          ))}
        </tbody>
      </table>
      <div className={s.cart__price}>
        <h3>Итоговая стоимость</h3>
        <h2>руб.</h2>
      </div>
      <button type="button" className="add_button" onClick={clearCart}>
        Очистить корзину
      </button>
      <Link to="/delivery" className="add_button delivery_button">
        Оформить заказ
      </Link>
    </div>
  );
};

export default Cart;

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  clearCart: PropTypes.func.isRequired,
  clearCartItem: PropTypes.func.isRequired,
};
