import React from "react";
import MenuItem from "./MenuItem.jsx";
import s from "../style.module.css";

import { ButtonGroup } from "@material-ui/core/";

class RenderPizzas extends React.Component {
    
  render() {
      console.log(this.props.renderPizza)
    return <div className={s.menu__content}>
        {this.props.renderPizza}
    </div>;
  }
}

export default RenderPizzas;
