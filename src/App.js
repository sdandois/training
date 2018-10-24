import React, { PureComponent } from 'react';
import { Platform, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers';
import RootStack from './Navigation';

class App extends PureComponent {
  render() {
    return (
      <Provider store={createStore(reducers)} >
        <RootStack />
      </Provider>
    );
  }
}

export default App;

