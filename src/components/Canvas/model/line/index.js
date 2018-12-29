import Base from '../base';

class Line extends Base {
  constructor(props) {
    super(props);
    const { lineList = [], lineWidth=this.ratio, color } = props;
    this.lineList = lineList;
    this.lineWidth = lineWidth;
    this.lineColor = color;
  }

  draw() {
    const { ctx, ratio, x, y, lineList, lineWidth, lineColor } = this;
    ctx.translate(x * ratio, y * ratio);
    ctx.lineWidth = lineWidth * ratio;
    ctx.strokeStyle = lineColor;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    lineList.forEach(({ x: toX, y: toY}) => {
      ctx.lineTo((toX - x) * ratio, (toY - y) * ratio);
    });
    ctx.stroke();
  }
}

export default Line;
