import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Provider from './Provider';
import BottomTabNav from './routes/BottomTabNav';

export default function SampleApp() {
  return (
    <>
      <Provider>
        <NavigationContainer>
          <BottomTabNav />
        </NavigationContainer>
      </Provider>
    </>
  );
}
