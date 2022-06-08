import React, { Component } from "react";
import Slider from "rc-slider";
import BasicSelect from "./BasicSelect";
import "rc-slider/assets/index.css";
import "./Navbar.css";

/*Select imports*/
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { colorFormat: "hex" };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ colorFormat: event.target.value });
    this.props.handleChange(event.target.value);
  }
  render() {
    const { level, changeLevel } = this.props;
    const { colorFormat } = this.state;
    return (
      <header className="Navbar">
        <div className="logo">
          <a href="#">reactcolorpicker</a>
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
                onChange={this.handleChange}
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
      </header>
    );
  }
}

export default Navbar;
