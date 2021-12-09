import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Buffer } from 'buffer';
import CanvasDraw from 'react-canvas-draw';
import { ChromePicker } from 'react-color';
import { createDoodle } from '../../actions/doodle';
import { uploadDoodle } from '../../services/s3';

class Canvas extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
              const result = this.saveableCanvas.getDataURL();
              const buffer = Buffer.from(result.replace(/^data:image\/\w+;base64,/, ''), 'base64');
              const key = new Date().getTime();
              const imageData = {
                buffer,
                name: `${this.props.user.username}-post-${key}`,
                type: 'image/png',
              };

              uploadDoodle(imageData).then((url) => {
                const imageUrl = { url };
                this.props.createDoodle(imageUrl, this.props.history);
              }).catch((error) => {
                console.log('error');
              });
            }}
          >
            <i className="fas fa-arrow-circle-up" />
            Upload
          </button>
        </div>

      </section>
    );
  }
}

// connects particular parts of redux state to this components props
const mapStateToProps = (state) => (
  {
    user: state.auth.userObject.user,
  }
);

export default withRouter(connect(mapStateToProps, { createDoodle })(Canvas));
