import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { initialStoreState, IStoreState, reducers, StoreActions } from './store';


const store = createStore<any, StoreActions, any, any>(reducers, initialStoreState, composeWithDevTools());
export default store;