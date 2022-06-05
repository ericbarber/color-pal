import React, { Component } from "react";

import { generatePalette } from "./colorHelper";
import SeedColors from "./SeedColors";
import Palette from "./Palette";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Palette palette={generatePalette(SeedColors[4])} />
      </div>
    );
  }
}

export default App;
