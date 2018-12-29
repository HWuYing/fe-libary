import React, { PureComponent} from 'react';
import factoryCanvas from './canvas';

class DrawCanvas extends PureComponent {
  constructor(props, context) {
    super(props, context);
    this.isClient = typeof window !== 'undefined';
    this.canvas = factoryCanvas(props);
  }

  getCanvas(canvas) {
    const { getCanvas } = this.props;
    if (canvas) this.canvas.setCanvas(canvas);
    if (getCanvas) getCanvas(this.canvas);
  }

  render() {
    if (!this.isClient) return null;
    const { style={} } = this.props;
    const { width, height, containerWidth, containerHeight } = this.canvas;
    const mergeStyle = Object.assign({
      width: `${width}px`,
      height: `${height}px`,
    }, style);
    return (
      <canvas ref={(canvas) => this.getCanvas(canvas)} width={containerWidth} height={containerHeight} style={mergeStyle} />
    );
  }
}

export default DrawCanvas;
