import s from '../style.module.css';

const CartItem = (props) => {
    let clearCartItem = () => {
      props.clearCartItem(props.item);
    };
    return (
      <tr>
        <td>{props.item.name}</td>
        <td>{props.item.currentSize}</td>
        <td>{props.item.currentPrice} руб.</td>
        <td>
          <button className={s.del_button} onClick={clearCartItem}>убрать</button>
        </td>
      </tr>
    );
  };

  export default CartItem;