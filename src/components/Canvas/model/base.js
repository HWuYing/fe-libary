class AbstractBase {
  constructor({ ctx, ratio=1, hash, containerWidth, containerHeight, devicePixelRatio,  x=0, y=0 }) {
    this.x = x;
    this.y = y;
    this.ctx = ctx;
    this.hash = hash;
    this.ratio = ratio;
    this.containerWidth = containerWidth;
    this.containerHeight = containerHeight;
    this.devicePixelRatio = devicePixelRatio;
  }
}

class Base extends AbstractBase {
  resetRatio(ratio) {
    this.ratio = ratio;
  }
}

export default Base;
export {
  AbstractBase,
};
