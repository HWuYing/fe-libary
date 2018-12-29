import injectionEvent, { getEventBus } from "./eventbus";
import injectionUtil, { getUtil } from "./util";

export default function(Component) {
  injectionEvent(Component);
  injectionUtil(Component);
}

export {
  getEventBus,
  getUtil,
}
