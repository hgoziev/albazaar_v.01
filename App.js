import React, {useEffect, useState} from 'react';
import AppNavigator from './Navigation/AppNavigator';
import store from './Store/Store';
import {Provider} from 'react-redux';
import ByCategory from './Screens/ByCategory/ByCategory';

function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
      {/* <ByCategory /> */}
    </Provider>
  );
}

export default App;
