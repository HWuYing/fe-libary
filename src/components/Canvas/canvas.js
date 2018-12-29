import { getPrefix } from '@tools';
import * as ModelMap from './model';
import ExampleMap from './model/exampleMap';

function hash() {
  let count = 0;
  return () => {
    count += 1;
    return count.toString();
  };
}

function factoryModel(injectionModel) {
  const keys = Object.keys(ModelMap);
  return keys.forEach(key => injectionModel(`create${key}`, ModelMap[key]));
}

function getScrenPixelDensity() {
  if (typeof window === 'undefined') return 1;
  return window.devicePixelRatio || 1;
}

function dataURLtoBlob(dataUrl) {
  const arr = dataUrl.split(',')
  const mime = arr[0].match(/:(.*?);/)[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  /* eslint-disable no-plusplus */
  while(n--){
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], {type:mime});
}

export default function factoryCanvas(...arg){
  class Canvas extends ExampleMap{
    constructor({ ratio=1, width, height, fontFamily='Arial' }) {
      super();
      // 像素密度
      this.devicePixelRatio = getScrenPixelDensity();
      this.ratio = ratio * this.devicePixelRatio;
      this.canvas = undefined;
      this.ctx = undefined;
      this.width = width * ratio;
      this.height = height * ratio;
      this.containerWidth = width * this.ratio;
      this.containerHeight = height * this.ratio;
      this.fontFamily = fontFamily;
      this.getHash = hash();
    }

    injectionModel(key, Model) {
      const { getHash, ctx, ratio, exampleMap, containerWidth, containerHeight, devicePixelRatio, fontFamily } = this;
      const { prototype } = Canvas;
      prototype[key] = (props) => {
        const example = new Model({
          ...props,
          containerWidth,
          containerHeight,
          hash:  getHash(),
          ctx,
          devicePixelRatio,
          exampleMap,
          ratio,
        });
        if (example.setDefaultFontFamily) example.setDefaultFontFamily(fontFamily);
        example.removeExample = () => this.removeExample(example);
        return example;
      }
    }

    setBackingStorePixelRatio() {
      const { ctx, devicePixelRatio } = this;
      const { dom } = getPrefix();
      ctx.backingStorePixelRatio = devicePixelRatio;
      ctx[`${dom}BackingStorePixelRatio`] = devicePixelRatio;
    }

    setCanvas(canvas) {
      this.canvas = canvas;
      this.ctx = canvas.getContext('2d');
      factoryModel(this.injectionModel.bind(this));
      this.setBackingStorePixelRatio();
    }

    draw() {
      const { ctx, width, height } = this;
      this.ctx.clearRect(0, 0, width, height);
      ctx.save();
      super.draw(this.ctx);
      ctx.restore();
    }

    toDataBlob(type, encoderOptions) {
      const data = this.canvas.toDataURL(type, encoderOptions);
      return dataURLtoBlob(data);
    }
  }

  return new Canvas(...arg);
}
