import Base from './../base';

class Text extends Base {
  constructor(props) {
    super(props);
    const { text, fontSize, color, fontWeight = 'normal', textBaseline = 'top', fontFamily } = props;
    this.text = text;
    this.fontSize = fontSize;
    this.color = color;
    this.fontWeight = fontWeight;
    this.textBaseline = textBaseline;
    this.measureWidth = 0;
    this.fontFamily = fontFamily;
  }

  setText(text) {
    this.text = text;
  }

  setDefaultFontFamily(family) {
    this.defaultFontFamily = family;
  }

  setFontFamily(family) {
    this.fontFamily = family;
  }

  draw() {
    const { ctx, text, fontSize, ratio, fontWeight, textBaseline,  x, y, color, defaultFontFamily, fontFamily } = this;
    ctx.translate(x * ratio, y * ratio);
    ctx.textBaseline = textBaseline;
    ctx.fillStyle = color;
    ctx.font = `${fontWeight} ${ fontSize * ratio }px ${fontFamily || defaultFontFamily}`;
    ctx.fillText(text, 0, 0);
    this.measureWidth = ctx.measureText(text).width;
  }

  measureLength() {
    const { ratio } = this;
    return this.measureWidth / ratio;
  }
}

export default Text;
