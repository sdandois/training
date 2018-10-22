import React, { Component } from 'react';
import { Platform, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';


import TodoScreen from './TodoScreen';
import DummyScreen from './DummyScreen';
import reducers from './reducers';

import * as screenNames from './constants/screenNames';

const TabNavigator = createMaterialTopTabNavigator(
  {
    [screenNames.Todos]:TodoScreen,
    [screenNames.Dummy]:DummyScreen
  },
  { 
    initialRouteName: screenNames.Todos,
    tabBarOptions: {
      style: {
        backgroundColor: 'blue'
      },
      labelStyle: {
        fontWeight: '900'
      }
    }
  }
) ;

const RootStack = createStackNavigator(
  {
    [screenNames.Home]:TabNavigator
  },
  {
    initialRouteName:screenNames.Home,
    navigationOptions:{  
      title: 'App',
      headerStyle:{
        backgroundColor:'light-grey'
      }
    }
  }
);

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
