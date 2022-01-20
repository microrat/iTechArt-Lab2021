import s from '../style.module.css';

const OrderItem = (props) => {
    return (
      <tr >
        <td className={s.delivery__form__table__item}>{props.item.name}</td>
        <td className={s.delivery__form__table__item}>{props.item.currentSize}</td>
        <td className={s.delivery__form__table__item}>{props.item.currentPrice} руб.</td>
        <td className={s.delivery__form__table__item}>
          <button >убрать</button>
        </td>
      </tr>
    );
  };

  export default OrderItem;