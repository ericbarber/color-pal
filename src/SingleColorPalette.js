import React, { Component, setState } from "react";
import { Link } from "react-router-dom";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PalletteFooter";

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this.state = { colorFormat: "hex" };
    this.changeColorFormat = this.changeColorFormat.bind(this);
  }

  gatherShades(palette, colorToFilterBy) {
    let shades = [];
    let allColors = palette.colors;

    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter((color) => color.id === colorToFilterBy)
      );
    }
    return shades.slice(1);
  }

  changeColorFormat(value) {
    this.setState({ colorFormat: value });
  }

  render() {
    const { palette, colorId } = this.props;
    const { paletteName, emoji, id } = this.props.palette;
    const { colorFormat } = this.state;

    const _shades = this.gatherShades(palette, colorId);
    const colorBoxes = _shades.map((color) => (
      <ColorBox
        key={color.name}
        name={color.name}
        background={color[colorFormat]}
        showLink={false}
      />
    ));

    return (
      <div className="SingleColorPalette Palette">
        <Navbar
          handleChange={this.changeColorFormat}
          showingAllColors={false}
        />
        <div className="Palette-colors">
          {colorBoxes}
          <div className="go-back ColorBox">
            <Link className="back-button" to={`/palette/${id}`}>
              Go Back
            </Link>
          </div>
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}
export default SingleColorPalette;
