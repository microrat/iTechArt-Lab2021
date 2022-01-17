import s from "../style.module.css";
import React from "react";

class UserListItem extends React.Component {
  constructor(props) {
    super(props);
    this.deleteUser = this.deleteUser.bind(this);
  }
  deleteUser() {
    this.props.deleteUser(this.props.user);
  }

  render() {
    return (
      <tr>
        <td className={s.admin__table__cell}>{this.props.user.id}</td>
        <td className={s.admin__table__cell}>{this.props.user.name}</td>
        <td className={s.admin__table__cell}>{this.props.user.surname}</td>
        <td className={s.admin__table__cell}>{this.props.user.email}</td>
        <td className={s.admin__table__cell}>{this.props.user.address}</td>
        <td className={s.admin__table__cell}>
          <button >Изменить</button>
          <button onClick={this.deleteUser}>Удалить</button>
        </td>
      </tr>
    );
  }
}

export default UserListItem;
