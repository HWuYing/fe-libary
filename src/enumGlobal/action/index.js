import { getDataSource } from '../service';

export const SET_DATASOURCE = 'SET_DATASOURCE';

export const getSourceList = (param, httpOptions) => async dispatch => {
  const res = await getDataSource(param, httpOptions);
  const { data } = res;
  const { storeKey } = param;

  dispatch({
    type: SET_DATASOURCE,
    payload: { data, storeKey },
  });

  return data;
};
