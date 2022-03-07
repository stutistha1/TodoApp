import React from 'react';
import {Provider} from 'react-redux';
import store, {persistor} from './store';
import {PersistGate} from 'redux-persist/integration/react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNav from './routes/BottomTabNav';

const SampleApp = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <NavigationContainer>
        <BottomTabNav />
      </NavigationContainer>
    </PersistGate>
  </Provider>
);

export default SampleApp;
