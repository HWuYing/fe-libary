import { hasOwnProperty, factory } from '@particulate';
import { mapEntry as basicsEntry } from './basics';
import decision from '@tools/decisionType';
import ConnectEntry from './ConnectEntry';
import ConnectToEntry from './ConnectToEntry';
import MoreEntry from './MoreEntry'
import EditableComponent from './EditableComponent';

const { batchEntryMap } = factory;

const mapEntry = {
  ...basicsEntry,
  ...batchEntryMap({
    moreEntry: MoreEntry,
    editableComponent: EditableComponent,
  }),
};

function factoryEntry(key, option) {
  if (!hasOwnProperty(mapEntry, key)) {
    throw new Error(`${key} entry is not defined`);
  }
  return mapEntry[key](option);
}

function registryEntry(key, entry) {
  if (decision(key) === 'object') {
    Object.keys(key).map((keyClone, item) => registryEntry(keyClone, key[keyClone]));
  } else if (typeof entry !== 'undefined') {
    if (hasOwnProperty(mapEntry, key)) throw new Error(`${key} entry existence`);
    Object.assign(mapEntry, {
      [key]: entry,
    });
  } else throw new Error('parameter is incorrect');
}

export default factoryEntry;
export { registryEntry, ConnectEntry, ConnectToEntry };
