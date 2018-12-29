import { reducer } from '@applyStore';
import enumGlobalReducer from './reduces';
import * as enumGlobalAction from './action';

reducer('globalEnum', enumGlobalReducer);

export { enumGlobalAction };
