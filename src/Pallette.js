import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./Pallette.css";
class Pallette extends Component {
  render() {
    const colorBoxes = this.props.pallette.colors.map((color) => (
      <ColorBox background={color.color} name={color.name} />
    ));

    // const colorBoxes = this.props.pallette.colors;

    return (
      <div className="Pallette">
        {/* Navbar goes here */}
        <div className="Pallette-colors">{colorBoxes}</div>
        {/* footer here eventually */}
      </div>
    );
  }
}

export default Pallette;
