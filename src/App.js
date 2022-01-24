import "./App.css";
import Header from "./components/Header/Header.jsx";
import PizzaCard from "./components/PizzaCard/PizzaCard.jsx";
import AddForm from "./components/AddForm/AddForm.jsx";
import Cart from "./components/Cart/Cart.jsx";
import Users from "./components/Users/Users.jsx";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import React from "react";
import Login from "./components/Authorization/Login";
import Registration from "./components/Authorization/Registration";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import DeliveryForm from "./components/DeliveryForm/DeliveryForm";
import PizzaList from "./components/PizzaList/PizzaList";
import Footer from "./components/Footer/Footer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state=  {
      pizzas: [
        {
          id: 1,
          img:"https://raw.githubusercontent.com/microrat/iTechArt-Lab2021/main/src/assets/img/pic1.jpg",
          name: "Пеперонни",
          desc:
            "Салями пепперони, острый консервированный перец, сыр пармезан, свежая зелень, паприка, твёрдый сыр, мексиканский острый соус, основа для пиццы",
          size: {
            sm: {
              price: 15,
            },
            md: {
              price: 19,
            },
            lg: {
              price: 26,
            },
          },
        },
        {
          id: 2,
          img:"https://raw.githubusercontent.com/microrat/iTechArt-Lab2021/main/src/assets/img/pic2.jpg",
          name: "Барбекю",
          desc:
            "Копчёная грудинка, сыр моцарелла, соус барбекю, репчатый лук, сушёный орегано, твёрдый сыр, томатный соус, основа для пиццы",
          size: {
            sm: {
              price: 16,
            },
            md: {
              price: 20,
            },
            lg: {
              price: 25,
            },
          },
        },
        {
          id: 3,
          img:"https://raw.githubusercontent.com/microrat/iTechArt-Lab2021/main/src/assets/img/pic3.jpg",
          name: "Морская",
          desc:
            "Копчёная грудинка, сыр моцарелла, соус барбекю, репчатый лук, сушёный орегано, твёрдый сыр, томатный соус, основа для пиццы",
          size: {
            sm: {
              price: 16,
            },
            md: {
              price: 20,
            },
            lg: {
              price: 25,
            },
          },
        },
        {
          id: 4,
          img:"https://raw.githubusercontent.com/microrat/iTechArt-Lab2021/main/src/assets/img/pic4.jpg",
          name: "Ананасовая",
          desc:
            "Копчёная грудинка, сыр моцарелла, соус барбекю, репчатый лук, сушёный орегано, твёрдый сыр, томатный соус, основа для пиццы",
          size: {
            sm: {
              price: 16,
            },
            md: {
              price: 20,
            },
            lg: {
              price: 25,
            },
          },
        },
        {
          id: 5,
          img:"https://raw.githubusercontent.com/microrat/iTechArt-Lab2021/main/src/assets/img/pic5.jpg",
          name: "Мясная",
          desc:
            "Копчёная грудинка, сыр моцарелла, соус барбекю, репчатый лук, сушёный орегано, твёрдый сыр, томатный соус, основа для пиццы",
          size: {
            sm: {
              price: 16,
            },
            md: {
              price: 20,
            },
            lg: {
              price: 25,
            },
          },
        },
        {
          id: 6,
          img:"https://raw.githubusercontent.com/microrat/iTechArt-Lab2021/main/src/assets/img/pic6.jpg",
          name: "Грибная",
          desc:
            "Копчёная грудинка, сыр моцарелла, соус барбекю, репчатый лук, сушёный орегано, твёрдый сыр, томатный соус, основа для пиццы",
          size: {
            sm: {
              price: 16,
            },
            md: {
              price: 20,
            },
            lg: {
              price: 25,
            },
          },
        },
        {
          id: 7,
          img:"https://raw.githubusercontent.com/microrat/iTechArt-Lab2021/main/src/assets/img/pic7.jpg",
          name: "Грибная",
          desc:
            "Копчёная грудинка, сыр моцарелла, соус барбекю, репчатый лук, сушёный орегано, твёрдый сыр, томатный соус, основа для пиццы",
          size: {
            sm: {
              price: 16,
            },
            md: {
              price: 20,
            },
            lg: {
              price: 25,
            },
          },
        },
        {
          id: 8,
          img:"https://raw.githubusercontent.com/microrat/iTechArt-Lab2021/main/src/assets/img/pic8.jpg",
          name: "Грибная",
          desc:
            "Копчёная грудинка, сыр моцарелла, соус барбекю, репчатый лук, сушёный орегано, твёрдый сыр, томатный соус, основа для пиццы",
          size: {
            sm: {
              price: 16,
            },
            md: {
              price: 20,
            },
            lg: {
              price: 25,
            },
          },
        },
      ],
      userList: [
        {
          name: "Eric",
          surname: "Cartman",
          email: "cartman@gmail.com",
          address: "Московский просп., 19, корп. 1",
          password: "12345",
        },
        {
          name: "Kyle",
          surname: "Broflovski",
          email: "broflovski@gmail.com",
          address: "Московский просп., 19, корп. 1",
          password: "kyle",
        },
        {
          name: "TAEST",
          surname: "USER",
          email: "1",
          address: "ADR",
          password: "1",
        },
      ],
      currentUser: {},
      cart: [],
    };
    

  addPizza = (newPizza) => {
    this.setState((state) => ({ pizzas: [...state.pizzas, newPizza] }));
  };
  deletePizza = (pizzaId) => {
    const reducedPizzaList = this.state.pizzas.filter(
      (value) => value.id !== pizzaId
    );
    this.setState({pizzas: reducedPizzaList });
  };

  editPizza = (pizza, pizzaOld) => {
    const editedPizzaList = [...this.state.pizzas];
    const index = editedPizzaList.indexOf(pizzaOld);
    editedPizzaList[index] = pizza;
    this.setState({ pizzas: editedPizzaList });
  };

  addToCart = (newItem) => {
    this.setState((state) => ({ cart: [...state.cart, newItem] }));
  };

  clearCart = () => {
    this.setState((state) => ({ cart: [] }));
  };

  clearCartItem = (itemId) => {
    const reducedCart = [...this.state.cart];
    reducedCart.splice(itemId, 1);
    this.setState({ cart: reducedCart });
  };

  deleteUser = (userEmail) => {
    const reducedUserList = this.state.userList.filter(
      (value) => value.email !== userEmail
    );
    this.setState({ userList: reducedUserList });
  };

  addUser = (newUser) => {
    this.setState((state) => ({ userList: [...state.userList, newUser] }));
  };

  editUser = (user, userOld) => {
    const editedUserList = [...this.state.userList];
    const index = editedUserList.indexOf(userOld);
    editedUserList[index] = user;
    this.setState({ userList: editedUserList });
  };
  setCurrentUser=(user)=>{
    this.setState({currentUser:user});
  }

  isLogin=()=>{
    if(Object.keys(this.state.currentUser).length === 0)return false;
    else return true;
  }

  render() {    
    return (
      <Router>
        <Header />
        
        <Routes>
          <Route path="/" element={<Home pizzas={this.state.pizzas} />} />
          <Route path="/:id" element={ <PizzaCard pizzas={this.state.pizzas} cart={this.state.cart} addToCart={this.addToCart} />} />
          <Route path="/add" element={<AddForm state={this.state} addPizza={this.addPizza} />} />
          <Route path="/cart" element={<Cart cart={this.state.cart} clearCart={this.clearCart} clearCartItem={this.clearCartItem}/> } />
          <Route path="/users" element={ <Users userList={this.state.userList} addUser={this.addUser} deleteUser={this.deleteUser} editUser={this.editUser} /> }/>
          <Route path="/pizzas" element={ <PizzaList pizzas={this.state.pizzas} addPizza={this.addPizza} deletePizza={this.deletePizza} editPizza={this.editPizza} /> }/>
          <Route path="/login" element={ <Login userList={this.state.userList} currentUser={this.state.currentUser}  setCurrentUser={this.setCurrentUser}/> }/>
          <Route path="/registration" element={ <Registration userList={this.state.userList} addUser={this.addUser} /> } />
          <Route path="/profile" element={<Profile currentUser={this.state.currentUser} editUser={this.editUser}/>} />
          <Route path="/delivery" element={<DeliveryForm currentUser={this.state.currentUser} editUser={this.editUser} cart={this.state.cart}/>} />
        </Routes>
        <Footer/>
      </Router>
      
    );
  }
};

export App;
