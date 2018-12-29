import Base from '../base';

class Image extends Base{
  constructor(props) {
    super(props);
    const { width, height, src } = props;
    this.image = undefined;
    this.width = width;
    this.height = height;
    this.src = src;
  }

  loadImage() {
    return new Promise((resolve) => {
      const { src } = this;
      const image = document.createElement('img');
      image.src = src;
      image.style.display = 'none';
      image.crossOrigin = "Anonymous";
      document.body.appendChild(image);
      image.onload = () => {
        resolve();
        this.image = image;
        document.body.removeChild(image);
      };
    });
  }

  draw() {
    const { ctx, x, y, width, height, ratio } = this;
    let promise = Promise.resolve();
    if (!this.image) promise = this.loadImage();
    return promise.then(() => {
      ctx.save();
      ctx.translate(x * ratio, y * ratio);
      ctx.drawImage(this.image, 0, 0, width * ratio, height * ratio);
      ctx.restore();
    });
  }
}

export default Image;
