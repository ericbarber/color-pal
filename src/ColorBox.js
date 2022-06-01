import React, { Component } from "react";
import "./ColorBox.css";

class ColorBox extends Component {
  render() {
    const { name, background } = this.props;
    return (
      <div style={{ background }} className="ColorBox">
        <dvi className="copy-container">
          <div className="box-container">
            <span className="box-content">{name}</span>
            <span className="see-more">MORE</span>
          </div>
          <button className="copy-button">Copy</button>
        </dvi>
      </div>
    );
  }
}

export default ColorBox;
