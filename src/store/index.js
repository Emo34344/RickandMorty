import {createStore, applyMiddLeware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddLeware(thunk));

export default store;