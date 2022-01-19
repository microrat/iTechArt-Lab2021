import s from "./style.module.css";
import React from "react";
import UserListItem from "./components/UserListItem";

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      surname: "",
      email: "",
      address: "",
      password: "",
    };

    this.handleName = this.handleName.bind(this);
    this.handleSurname = this.handleSurname.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleAddress = this.handleAddress.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  handleName(event) {
    this.setState({ name: event.target.value });
  }
  handleSurname(event) {
    this.setState({ surname: event.target.value });
  }
  handleEmail(event) {
    this.setState({ email: event.target.value });
  }
  handleAddress(event) {
    this.setState({ address: event.target.value });
  }

  handlePassword(event) {
    this.setState({password: event.target.value } );
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addUser(this.state);
    alert("Пользователь добавлен");
  }

  render() {
    return (
      <div className="container">
        <div className={s.admin__container}>
          {this.props.userList.map((user) => (
            <UserListItem
              key={user.email}
              user={user}
              deleteUser={this.props.deleteUser}
              editUser={this.props.editUser} />
          ))}
          <form onSubmit={this.handleSubmit}>
            <label>
              имя:
              <input
                type="text"
                className={s.admin__table__form_input}
                onChange={this.handleName}
                value={this.state.name} />
            </label>
            <label>
              фамилия:
              <input
                type="text"
                className={s.admin__table__form_input}
                onChange={this.handleSurname}
                value={this.state.surname} />
            </label>
            <label>
              email:
              <input
                type="text"
                className={s.admin__table__form_input}
                onChange={this.handleEmail}
                value={this.state.email} />
            </label>
            <label>
              адрес:
              <input
                type="text"
                className={s.admin__table__form_input}
                onChange={this.handleAddress}
                value={this.state.address} />
            </label>
            <label>
             пароль:
              <input
                type="text"
                className={s.admin__table__form_input}
                onChange={this.handlePassword}
                value={this.state.password} />
            </label>
            <input type="submit" value="Добавить" />
          </form>
        </div>
      </div>
    );
  }
}

export default Users;
