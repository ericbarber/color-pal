import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import { generatePalette } from "./colorHelper";
import SeedColors from "./SeedColors";
import Palette from "./Palette";

class App extends Component {
  render() {
    return (
      <Routes>
        <Route exact path="/" element={<h1>Palette list goes here </h1>} />
        <Route
          exact
          path="/palette/:id"
          // element={<Palette palette={generatePalette(SeedColors[4])} />}
          element={<h1>Palette here</h1>}
        />
      </Routes>
    );
  }
}

export default App;
