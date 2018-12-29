const hasOwnProperty = (o, key) => Object.prototype.hasOwnProperty.call(o, key);

class ExampleMap {
  constructor() {
    this.exampleMap = {};
  }

  addExample(example) {
    const { exampleMap } = this;
    const { hash: key } = example;
    if (hasOwnProperty(exampleMap, key)) return console.log(new Error(`${key} exampleMap is existence`));
    Object.assign(exampleMap, {
      [key]: example,
    });
  }

  removeExample(example) {
    const { exampleMap, hash } = this;
    const { hash: key } = example;
    if (hasOwnProperty(exampleMap, key)) {
      delete exampleMap[hash];
    }
  }

  draw(ctx) {
    const { exampleMap } = this;
    Object.keys(exampleMap).forEach(key => {
      const example = exampleMap[key];
      ctx.save();
      if (example.draw) example.draw();
      ctx.restore();
    });
  }
}

export default ExampleMap;
