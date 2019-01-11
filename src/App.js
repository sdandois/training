import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers';
import RootStack from './Navigation';

const App = () => (
  <Provider store={createStore(reducers)}>
    <RootStack />
  </Provider>
);

export default App;
