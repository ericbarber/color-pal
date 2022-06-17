import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/PaletteListStyles";
import MiniPalette from "./MiniPalette";

class PaletteList extends Component {
  render() {
    const { palettes, classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}></nav>
          <h1>PALETTE SET</h1>{" "}
          <div className={classes.palettes}>
            {palettes.map((palette) => (
              <MiniPalette {...palette} key={palette.id} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
