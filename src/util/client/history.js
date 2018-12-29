import { createBrowserHistory as history } from 'history';

const listenCatch = [];
const targetHistory = history();
const historyListen = targetHistory.listen;

function listen(fn) {
  listenCatch.push(fn);
  return () => listenCatch.splice(listenCatch.indexOf(fn), 1);
}

function executeListen(...arg) {
  listenCatch.forEach(fn => fn(...arg));
}

targetHistory.listen = listen;

export {
  historyListen,
  executeListen,
}
export default targetHistory;
