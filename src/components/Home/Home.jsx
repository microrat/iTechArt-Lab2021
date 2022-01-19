import React from "react";
import HeaderPic from "./components/HeaderPic";
import Menu from "./components/Menu";

class Home extends React.Component {
  render() {
    return (
      <div>
        <HeaderPic />
        <Menu pizzas={this.props.pizzas} />
      </div>
    );
  }
}

export default Home;
