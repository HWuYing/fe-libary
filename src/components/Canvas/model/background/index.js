import Base from '../base';

class Background extends Base{
  constructor(props) {
    super(props);
    const { backgroundColor, width=this.containerWidth / this.ratio, height=this.containerHeight/ this.ratio } = props;
    this.backgroundColor = backgroundColor;
    this.width = width;
    this.height = height;
  }

  draw() {
    const { ctx, backgroundColor, x, y, width, height, ratio } = this;
    ctx.translate(x * ratio, y * ratio);
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, width * ratio, height * ratio);
  }
}

export default Background;
