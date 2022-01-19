import s from '../style.module.css';

const OrderItem = (props) => {
    return (
      <tr >
        <td>{props.item.name}</td>
        <td>{props.item.currentSize}</td>
        <td >{props.item.currentPrice} руб.</td>
        <td >
          <button >убрать</button>
        </td>
      </tr>
    );
  };

  export default OrderItem;