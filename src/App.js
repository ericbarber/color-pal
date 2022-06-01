import React, { Component } from "react";

import SeedColors from "./SeedColors";
import Pallette from "./Pallette";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Pallette pallette={SeedColors[4]} />
      </div>
    );
  }
}

export default App;
