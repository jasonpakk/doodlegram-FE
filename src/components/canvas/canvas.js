import React, { Component } from 'react';
import CanvasDraw from 'react-canvas-draw';
import { ChromePicker } from 'react-color';

class Canvas extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataURL: '',
      changeColor: false,
      color: '#ffc600',
      size: 500,
      brushRadius: 10,
      lazyRadius: 10,
    };
  }

  render() {
    return (
      <section id="canvas">
        <h2>Create!</h2>

        <div className="toolsRow">
          <button
            type="button"
            onClick={() => this.saveableCanvas.undo()}
          >
            <i className="fas fa-undo-alt" />
          </button>

          <button
            type="button"
            onClick={() => this.saveableCanvas.eraseAll()}
          >
            <i className="far fa-trash-alt" />
          </button>
          <p>Size</p>
          <input
            type="number"
            value={this.state.brushRadius}
            onChange={(e) => this.setState({ brushRadius: parseInt(e.target.value, 10) })}
          />
          <p>Sensitivity</p>
          <input
            type="number"
            value={this.state.lazyRadius}
            onChange={(e) => this.setState({ lazyRadius: parseInt(e.target.value, 10) })}
          />
          <p>Color</p>
          <button type="button"
            id="colorBox"
            style={{ backgroundColor: this.state.color }}
            onClick={() => { this.setState({ changeColor: true }); }}
            aria-label="color"
          >
            {this.state.changeColor ? (
              <ChromePicker
                className="colorPicker"
                disableAlpha
                color={this.state.color}
                onChangeComplete={(color) => {
                  this.setState({ color: color.hex });
                }}
              />
            ) : null}
          </button>

        </div>

        <div id="canvasFrame">
          <CanvasDraw
            ref={(canvasDraw) => { this.saveableCanvas = canvasDraw; }}
            brushColor={this.state.color}
            brushRadius={this.state.brushRadius}
            lazyRadius={this.state.lazyRadius}
            canvasWidth={this.state.size}
            canvasHeight={this.state.size}
            hideGrid
            enablePanAndZoom
            onChange={() => this.setState({ changeColor: false })}
          />
        </div>

        <div id="saveRow" className="toolsRow">
          <p>Frame Size</p>
          <input
            type="number"
            value={this.state.size}
            onChange={(e) => this.setState({ size: parseInt(e.target.value, 10) })}
          />
          <button
            type="button"
            onClick={() => {
              this.setState({ dataURL: this.saveableCanvas.getDataURL() });
            }}
          >
            <i className="fas fa-arrow-circle-up" />
            Upload
          </button>
          <img src={this.state.dataURL} alt="hi" />
        </div>

      </section>
    );
  }
}

export default Canvas;
