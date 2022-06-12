import React from "react";
import ColorBox from "./ColorBox";

function gatherShades(palette, colorToFilterBy) {
  let shades = [];
  let allColors = palette.colors;

  for (let key in allColors) {
    shades = shades.concat(
      allColors[key].filter((color) => color.id === colorToFilterBy)
    );
  }
  return shades.slice(1);
}

function SingleColorPalette(props) {
  const { palette, colorId } = props;

  const _shades = gatherShades(palette, colorId);
  const colorBoxes = _shades.map((color) => (
    <ColorBox
      key={color.id}
      name={color.name}
      background={color.hex}
      showLink={false}
    />
  ));

  return (
    <div className="Palette">
      <h1>Color Shades Boxes</h1>
      <div className="Palette-colors">{colorBoxes}</div>
    </div>
  );
}

export default SingleColorPalette;
