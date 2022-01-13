import "./App.css";
import HeaderPic from "./components/HeaderPic/HeaderPic.jsx";
import Menu from "./components/Menu/Menu.jsx";
import Header from "./components/Header/Header.jsx";
import PizzaCard from "./components/PizzaCard/PizzaCard.jsx";
import AddForm from "./components/AddForm/AddForm.jsx";
import Cart from "./components/Cart/Cart.jsx";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.addToCart = this.addToCart.bind(this);
  }
  state = {
    pizzas: [
      {
        id: 1,
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
    ],
    cart: [],
  };

  addPizza = (newPizza) => {
    this.setState((state) => ({ pizzas: [...state.pizzas, newPizza] }));
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

  render() {
    return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HeaderPic />} />
          <Route path="/menu" element={<Menu pizzas={this.state.pizzas} />} />
          <Route path="/menu/:id" element={<PizzaCard pizzas={this.state.pizzas} cart={this.state.cart} addToCart={this.addToCart}  />} />
          <Route path="/add" element={<AddForm  state={this.state} addPizza={this.addPizza} />} />
          <Route path="/cart" element={<Cart  cart={this.state.cart} clearCart={this.clearCart} clearCartItem={this.clearCartItem}/>}/>
        </Routes>
      </Router>
    );
  }
}

export default App;
