import React from 'react';
import {Provider} from 'react-redux';
import Todo from './component/Todo';
import store, {persistor} from './store';
import {PersistGate} from 'redux-persist/integration/react';

const SampleApp = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Todo />
    </PersistGate>
  </Provider>
);

export default SampleApp;
