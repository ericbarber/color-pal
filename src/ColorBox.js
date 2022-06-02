import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./ColorBox.css";

class ColorBox extends Component {
  render() {
    const { name, background } = this.props;
    return (
      <CopyToClipboard text={background}>
        <div style={{ background }} className="ColorBox">
          <div className="copy-container">
            <div className="box-container">
              <span className="box-content">{name}</span>
              <span className="see-more">MORE</span>
            </div>
            <button className="copy-button">Copy</button>
          </div>
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;
