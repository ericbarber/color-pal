import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import MiniPalette from "./MiniPalette";

const styles = {
  "@global": {
    ".fade-exit": {
      opacity: 1,
    },
    ".fade-exit-active": {
      opacity: 0,
      transition: "opacity 500ms ease-out",
    },
  },
  root: {
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    /* background by SVGBackgrounds.com */
    background: "#394bad",
    // backgroundImage: `url(${bg})`,
    overflow: "scroll",
  },
  heading: {
    fontSize: "2rem",
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
    // [sizes.down("xl")]: {
    //   width: "80%",
    // },
    // [sizes.down("xs")]: {
    //   width: "75%",
    // },
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
    "& a": {
      color: "white",
    },
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "2.5rem",
    // [sizes.down("md")]: {
    //   gridTemplateColumns: "repeat(2, 50%)",
    // },
    // [sizes.down("xs")]: {
    //   gridTemplateColumns: "repeat(1, 100%)",
    //   gridGap: "1.4rem",
    // },
  },
};

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
