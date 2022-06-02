import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./Palette.css";
class Palette extends Component {
  render() {
    const colorBoxes = this.props.palette.colors.map((color) => (
      <ColorBox background={color.color} name={color.name} />
    ));

    // const colorBoxes = this.props.palette.colors;

    return (
      <div className="Palette">
        {/* Navbar goes here */}
        <div className="Palette-colors">{colorBoxes}</div>
        {/* footer here eventually */}
      </div>
    );
  }
}

export default Palette;
