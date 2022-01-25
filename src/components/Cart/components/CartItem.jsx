import PropTypes from 'prop-types';
import s from '../style.module.css';

const CartItem = props => {
  const clearCartItem = () => {
    props.clearCartItem(props.item);
  };
  return (
    <tr className={s.cart_table_tr}>
      <td className={s.cart_table_td}>{props.item.name}</td>
      <td className={s.cart_table_td}>{props.item.currentSize}</td>
      <td className={s.cart_table_td}>{props.item.currentPrice} руб.</td>
      <td className={s.cart_table_td}>
        <button type="button" className={s.del_button} onClick={clearCartItem}>
          убрать
        </button>
      </td>
    </tr>
  );
};

export default CartItem;

CartItem.propTypes = {
  item: PropTypes.object.isRequired,
  clearCartItem: PropTypes.func.isRequired,
};
