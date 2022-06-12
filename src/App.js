import React, { Component } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import { generatePalette } from "./colorHelper";
import SeedColors from "./SeedColors";
import Palette from "./Palette";
import PaletteList from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette";

class App extends Component {
  render() {
    const PaletteWrapper = (props) => {
      let findPalette = (id) => {
        return SeedColors.find(function (palette) {
          return palette.id === id;
        });
      };
      const params = useParams();
      return <Palette palette={generatePalette(findPalette(params.id))} />;
    };

    const SingleColorPaletteWrapper = (props) => {
      let findPalette = (id) => {
        return SeedColors.find(function (palette) {
          return palette.id === id;
        });
      };
      const params = useParams();
      return (
        <SingleColorPalette
          colorId={params.colorId}
          palette={generatePalette(findPalette(params.paletteId))}
        />
      );
    };

    return (
      <Routes>
        <Route
          exact
          path="/palette/:paletteId/:colorId"
          element={<SingleColorPaletteWrapper />}
        />
        <Route exact path="/" element={<PaletteList palettes={SeedColors} />} />
        <Route exact path="/palette/:id" element={<PaletteWrapper />} />
      </Routes>
    );
  }
}

export default App;
