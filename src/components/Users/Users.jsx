import s from "./style.module.css";
import React from "react";
import UserListItem from "./components/UserListItem";

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      surname: "",
      email: "",
      address: "",
    };
    
    this.handleId = this.handleId.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleSurame = this.handleSurame.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleAddress = this.handleAddress.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleId(event) {
    this.setState({ id: event.target.value } );
  }
  handleName(event) {
    this.setState({ name: event.target.value } );
  }
  handleSurame(event) {
    this.setState({ surname: event.target.value } );
  }
  handleEmail(event) {
    this.setState({ email: event.target.value } );
  }
  handleAddress(event) {
    this.setState({ address: event.target.value } );
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addUser(this.state);
    alert("Пользователь добавлен");
  }

  render() {
    return (
      <div className={s.admin__container}>
        <table className={s.admin__table}>
          <thead className={s.admin__table__head}>
            <tr className={s.admin__table__row}>
              <th className={s.admin__table__cell}>Id</th>
              <th className={s.admin__table__cell}>Имя</th>
              <th className={s.admin__table__cell}>Фамилия</th>
              <th className={s.admin__table__cell}>Email</th>
              <th className={s.admin__table__cell}>Адрес</th>
              <th className={s.admin__table__cell}>Действия</th>
            </tr>
          </thead>
          <tbody>
            {this.props.userList.map((user) => (
              <UserListItem user={user} deleteUser={this.props.deleteUser} />
            ))}
            <tr>
              <td colspan="6" className={s.admin__table__form}>
                <form onSubmit={this.handleSubmit}>
                  <label>
                    id:
                    <input
                      type="text"
                      className={s.admin__table__form_input}
                      onChange={this.handleId}
                      value={this.state.id}
                    />
                  </label>
                  <label>
                    имя:
                    <input
                      type="text"
                      className={s.admin__table__form_input}
                      onChange={this.handleName}
                      value={this.state.name}
                    />
                  </label>
                  <label>
                    фамилия:
                    <input
                      type="text"
                      className={s.admin__table__form_input}
                      onChange={this.handleSurname}
                      value={this.state.surname}
                    />
                  </label>
                  <label>
                    email:
                    <input
                      type="text"
                      className={s.admin__table__form_input}
                      onChange={this.handleEmail}
                      value={this.state.email}
                    />
                  </label>
                  <label>
                    адрес:
                    <input
                      type="text"
                      className={s.admin__table__form_input}
                      onChange={this.handleAddress}
                      value={this.state.address}
                    />
                  </label>
                  <input type="submit" value="Добавить" />
                </form>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Users;
