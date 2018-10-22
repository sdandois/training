import React, { Component } from 'react';
import { Platform, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { createMaterialTopTabNavigator } from 'react-navigation';


import TodoScreen from './TodoScreen';
import DummyScreen from './DummyScreen';
import reducers from './reducers';

import * as screenNames from './constants/screenNames';

const RootStack = createMaterialTopTabNavigator(
  {
    [screenNames.Todos]:TodoScreen,
    [screenNames.Dummy]:DummyScreen
  },
  { 
    initialRouteName: screenNames.Todos,
    tabBarOptions: {
      style: {
        paddingTop: 40,
        backgroundColor: 'blue'
      },
      labelStyle: {
        fontWeight: '900'
      }
    }
  }
) ;

class App extends Component { 
  render() {
    return (
      <Provider store={createStore(reducers)} >
        <RootStack />
      </Provider>
    );
  }
}
 



export default App;
