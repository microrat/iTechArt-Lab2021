import s from "../style.module.css";
import React from "react";

class UserListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      name: this.props.user.name,
      surname: this.props.user.surname,
      email: this.props.user.email,
      address: this.props.user.address,
      password: this.props.user.password,
    };
    this.deleteUser = this.deleteUser.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleSurname = this.handleSurname.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleAddress = this.handleAddress.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.editUser = this.editUser.bind(this);
  }

  editUser(event) {
    event.preventDefault();
    this.props.editUser(this.state,this.props.user);
    alert("Изменено");
  }

  deleteUser(event) {
    event.preventDefault();
    this.props.deleteUser(this.props.user.email);
  }

  handleName(event) {
    this.setState({ name: event.target.value } );
  }
  handleSurname(event) {
    this.setState({ surname: event.target.value } );
  }
  handleEmail(event) {
    this.setState({ email: event.target.value } );
  }
  handleAddress(event) {
    this.setState({ address: event.target.value } );
  }

  handlePassword(event) {
    this.setState({password: event.target.value } );
  }

  render() {
    return (
      <form onSubmit={this.editUser} className={s.admin__table__form}>
       <input type="text" className={s.admin__table__cell_input} value={this.state.name} onChange={this.handleName} />
        <input type="text" className={s.admin__table__cell_input} value={this.state.surname} onChange={this.handleSurname} />
        <input type="text" className={s.admin__table__cell_input} value={this.state.email} onChange={this.handleEmail}/>
        <input type="text" className={`${s.admin__table__cell_input} ${s.address}`} value={this.state.address} onChange={this.handleAddress}/> 
        <input type="text" className={s.admin__table__cell_input} value={this.state.password} onChange={this.handlePassword}/>  
          <button type="submit">Изменить</button>
          <button onClick={this.deleteUser}>Удалить</button>
        </form>
    );
  }
}

export default UserListItem;
