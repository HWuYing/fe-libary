import { hasOwnProperty, factory } from '@particulate';
import { Input, InputNumber, Rate, DatePicker, Steps, Slider } from 'antd';
import Switch from './Switch';
import EntrySelect from './Select';
import EntryRadioGroup from './RadioGroup';
import EntryCheckboxGroup from './CheckboxGroup';
import EntryText from './Text';
import EntryDateRange from './DateRange';
import EntryTreeSelect from './TreeSelect';
import EntryCascader from './Cascader';
import Upload from './Upload/component/CustomerImageUpload';
import CheckableTagGroup from './CheckableTagGroup';
import Image from './Image';
import ConnectToEntry from './ConnectToEntry';
import ConnectEntry from './ConnectEntry';
import CardStyle from './CardStyle';
import { libAction } from '../../../global/store';

const { TextArea, Search } = Input;
const { batchEntryMap } = factory;

const mapEntry = {
  ...batchEntryMap({
    input: Input,
    select: EntrySelect,
    radioGroup: EntryRadioGroup,
    checkboxGroup: EntryCheckboxGroup,
    inputNumber: InputNumber,
    rate: Rate,
    datePicker: DatePicker,
    textArea: TextArea,
    switch: Switch,
    text: EntryText,
    image: Image,
    search: Search,
    treeSelect: EntryTreeSelect,
    cascader: EntryCascader,
    upload: Upload,
    cardStyle: CardStyle,
    regionCascader: ConnectToEntry(EntryCascader, 'regionTree', libAction.getConfigRegion),
    connectSelect: ConnectEntry(EntrySelect),
    connectTreeSelect: ConnectEntry(EntryTreeSelect),
    connectCascader: ConnectEntry(EntryCascader),
    connectRadioGroup: ConnectEntry(EntryRadioGroup),
    tagGroup: CheckableTagGroup,
    dateRange: EntryDateRange,
    steps: Steps,
    slider: Slider,
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

export { mapEntry, registryEntry };
