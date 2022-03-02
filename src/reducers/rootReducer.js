import {combineReducers} from 'redux';
import todoReducer from './todoReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';

const rootReducer = combineReducers({
  todos: persistReducer(persistConfig, todoReducer),
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

export default rootReducer;
