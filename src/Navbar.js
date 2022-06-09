import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "rc-slider";
// import BasicSelect from "./BasicSelect";
import "rc-slider/assets/index.css";
import "./Navbar.css";

/*Select imports*/
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

/*Snackbar imports*/
// import * as React from "react";
// import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { colorFormat: "hex", open: false };
    this.handleColorFormatChange = this.handleColorFormatChange.bind(this);
    this.closeSnackbar = this.closeSnackbar.bind(this);
  }
  handleColorFormatChange(event) {
    this.setState({ colorFormat: event.target.value, open: true });
    this.props.handleChange(event.target.value);
  }
  closeSnackbar() {
    this.setState({ open: false });
  }
  render() {
    const { level, changeLevel } = this.props;
    const { colorFormat } = this.state;
    return (
      <header className="Navbar">
        <div className="logo">
          <Link to="/">reactcolorpicker</Link>
        </div>
        <div className="slider-container">
          <span>Level: {level}</span>
          <div className="slider">
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onAfterChange={changeLevel}
            />
          </div>
        </div>
        <div className="select-container">
          <Box sx={{ minWidth: 150 }}>
            <FormControl fullWidth>
              <InputLabel id="select-container-label">Color Format</InputLabel>
              <Select
                labelId="select-container-label"
                id="select-container"
                value={colorFormat}
                label="Color Format"
                onChange={this.handleColorFormatChange}
              >
                <MenuItem value="hex">HEX - #ffffff</MenuItem>
                <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
                <MenuItem value="rgba">
                  RGBA - rgba(255, 255, 255, 1.0)
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          open={this.state.open}
          autoHideDuration={2000}
          message={
            <span id="message-id">
              Format changed to {colorFormat.toUpperCase()}
            </span>
          }
          ContentProps={{
            "aria-describedby": "message-id",
          }}
          onClose={this.closeSnackbar}
          action={[
            <IconButton
              onClick={this.closeSnackbar}
              color="inherit"
              key="close"
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </header>
    );
  }
}

export default Navbar;
