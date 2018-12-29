const hasOwnProperty = (o, n) => Object.prototype.hasOwnProperty.call(o, n);
const type = o => Object.prototype.toString.call(o).replace(/\[object ([a-z|A-Z]*)\]/, '$1');

function initEventEmitter(eventbus) {
  if (typeof document !== 'undefined') {
    document.addEventListener('keydown', e => eventbus.$emit('KEY_DOWN', e), false);
  }
}

class EventBus {
  constructor() {
    this.eventEmitter = {
      'LOADING-CLOSE': [],
      'LOADING-OPEN': [],
      'ERROR-INTERCEPT': [],
      'FETCH-ERROR-INTERCEPT': [],
      'KEY_DOWN': [],
    };
    initEventEmitter(this);
  }

  getHandlers(key) {
    let handlers = this.eventEmitter[key];
    handlers = type(handlers) === 'Array' ? handlers : [handlers];
    return handlers;
  }

  $on(key, event) {
    if (!key || type(key) !== 'String') throw new Error('key类型不正确');
    if (!hasOwnProperty(this.eventEmitter, key)) {
      this.eventEmitter[key] = [];
    } else this.$off(key, event);
    this.eventEmitter[key].push(event);
    return () => this.$off(key, event);
  }

  $emit(...arg) {
    const key = arg.shift();
    if (!key) throw new Error('事件key值必须存在');
    if (!hasOwnProperty(this.eventEmitter, key)) {
      throw new Error(`没有注册${key}事件`);
    }
    this.getHandlers(key).forEach(handler => type(handler === 'Function') && handler(...arg));
  }

  $off(key, handler) {
    if (!hasOwnProperty(this.eventEmitter, key)) return;
    const handlers = this.getHandlers(key);
    handlers.some((_handler, index) => {
      if (_handler !== handler) return false;
      this.eventEmitter[key] = [].concat(
        handlers.slice(0, index),
        handlers.slice(index + 1, handlers.length)
      );
      return true;
    });
  }

  get(key) {
    return this.eventEmitter[key];
  }
}

const createEventBus = () => new EventBus();

const getEventBus = (function() {
  let $eventbus;
  return () => {
    if (!$eventbus) $eventbus = createEventBus();
    return $eventbus;
  };
})();

export default function(Component) {
  const prototypeClone = Component.prototype;
  if (!hasOwnProperty(prototypeClone, '$eventbus')) {
    Object.defineProperty(prototypeClone, '$eventbus', {
      get() {
        return getEventBus();
      },
      set() {
        throw new Error('event值不允许修改');
      },
    });
  }
}

export {
  getEventBus,
  createEventBus,
};
