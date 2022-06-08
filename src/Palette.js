import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import "./Palette.css";

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500, colorFormat: "hex" };
    this.changeLevel = this.changeLevel.bind(this);
    this.changeColorFormat = this.changeColorFormat.bind(this);
  }
  changeLevel(level) {
    this.setState({ level });
  }
  changeColorFormat(value) {
    this.setState({ colorFormat: value });
  }
  render() {
    const { colors } = this.props.palette;
    const { level, colorFormat } = this.state;
    const colorBoxes = colors[level].map((color) => (
      <ColorBox background={color[colorFormat]} name={color.name} />
    ));

    // const colorBoxes = this.props.palette.colors;

    return (
      <div className="Palette">
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeColorFormat}
        />
        <div className="Palette-colors">{colorBoxes}</div>
        {/* footer here eventually */}
      </div>
    );
  }
}

export default Palette;
