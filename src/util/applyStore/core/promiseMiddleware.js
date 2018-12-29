import { isPromise } from '@tools';

export default ({ dispatch }) => next => action => {
  const { payload, type } = action;
  if (!isPromise(payload)) return next(action);
  payload
    .then(res => {
      dispatch({
        type,
        payload: res,
      });
    })
    .catch(e => {
      console.log(e);
    });
  return next(action);
};
