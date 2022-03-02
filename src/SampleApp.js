import React from 'react';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import {createStore, applyMiddleware} from 'redux';
import Todo from './component/Todo';
import rootReducer from './reducers/rootReducer';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';

const store = createStore(rootReducer, applyMiddleware(logger));
const persistor = persistStore(store);

const SampleApp = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Todo />
    </PersistGate>
  </Provider>
);

export default SampleApp;
