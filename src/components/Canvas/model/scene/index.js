import ExampleMap from '../exampleMap';

class BaseExampleMap extends ExampleMap{}

class Scene extends BaseExampleMap {
  constructor({ ctx, example, ratio=1, hash, containerWidth, containerHeight, devicePixelRatio, x, y }) {
    super();
    this.x = x;
    this.y = y;
    this.ctx = ctx;
    this.hash = hash;
    this.example = example;
    this.containerWidth = containerWidth;
    this.containerHeight = containerHeight;
    this.devicePixelRatio = devicePixelRatio;
    this.ratio = ratio;
  }

  draw() {
    const { ctx, x, y, ratio } = this;
    ctx.translate(x * ratio, y * ratio);
    super.draw(this.ctx);
  }
}

export default Scene;
