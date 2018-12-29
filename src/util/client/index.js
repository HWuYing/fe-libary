import history from './history';
import fetch, { fetchBlob }  from '@fetch';
import loadMicro  from './loadMicro';

const download = async (href, filename) => {
  const blob = await fetchBlob.get(href, {
    crossDomain: false,
  });
  const a = document.createElement('a');
  const url = window.URL.createObjectURL(blob);
  a.href = url;
  a.download = filename;
  a.click();
  window.URL.revokeObjectURL(url);
};



export * from '../tools/asyncModule';
export {
  history,
  fetch,
  download,
  loadMicro,
}
