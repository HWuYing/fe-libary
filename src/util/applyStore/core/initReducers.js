function handlerAction(actionType, reducer = state => state) {
  return (state, action) => {
    const { type } = action;
    if (actionType === type) {
      return reducer(state, action);
    }
    return state;
  }
}

function reduceReducers(...reducers) {
  return (previous, current) =>
    reducers.reduce((p, r) => r(p, current) , previous);
}


export default () => (handlers, defaultStatus = {}) => {
  const reducers = Object.keys(handlers).map(type =>
    handlerAction(type, handlers[type])
  );

  const reducer = reduceReducers(...reducers);
  return (state = defaultStatus, action) => reducer(state, action);
}
