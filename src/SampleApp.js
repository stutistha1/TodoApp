import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {BottomTabNav} from './routes';

const SampleApp = () => {
  return (
    <NavigationContainer>
      <BottomTabNav />
    </NavigationContainer>
  );
};

export default SampleApp;
