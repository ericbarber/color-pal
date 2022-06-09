import React, { Component } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import { generatePalette } from "./colorHelper";
import SeedColors from "./SeedColors";
import Palette from "./Palette";

class App extends Component {
  render() {
    const PaletteWrapper = (props) => {
      let findPalette = (id) => {
        return SeedColors.find(function (palette) {
          return palette.id === id;
        });
      };
      const params = useParams();
      console.log("PARAMS", params);
      return <Palette palette={generatePalette(findPalette(params.id))} />;
    };
    return (
      <Routes>
        <Route exact path="/" element={<h1>Palette list goes here </h1>} />
        <Route exact path="/palette/:id" element={<PaletteWrapper />} />
      </Routes>
    );
  }
}

export default App;
