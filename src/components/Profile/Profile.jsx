import s from "./style.module.css";
import React from "react";


class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      name: this.props.currentUser.name,
      surname: this.props.currentUser.surname,
      email: this.props.currentUser.email,
      address: this.props.currentUser.address,
     password: this.props.currentUser.password,
    };
    this.handleName = this.handleName.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleSurname = this.handleSurname.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleAddress = this.handleAddress.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.editUser = this.editUser.bind(this);
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
  
  editUser(event) {
    event.preventDefault();
    this.props.editUser(this.state,this.props.currentUser);
    alert("Изменено");
  }

  render() {
    return (
      <div className="container">
      <div className={s.profile__container}>
      <form onSubmit={this.editUser} className={s.profile_form}>
        <label>Имя </label>
      <input type="text" className={s.profile__field} value={this.state.name} onChange={this.handleName} />
      <label>Фамилия </label>
       <input type="text" className={s.profile__field} value={this.state.surname} onChange={this.handleSurname} />
       <label>Email</label>
       <input type="text" className={s.profile__field} value={this.state.email} onChange={this.handleEmail}/>
       <label>Адрес</label>
       <input type="text" className={s.profile__field} value={this.state.address} onChange={this.handleAddress}/>   
       <label>Пароль</label>
       <input type="text" className={s.profile__field} value={this.state.password} onChange={this.handlePassword}/>   
         <button type="submit" className="button add_button">Изменить</button>
       </form>
       </div>
       </div>
    );
  }
}

export default Profile;
