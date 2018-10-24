import { createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';

import * as screenNames from './constants/screenNames';
import TodoScreen from './TodoScreen';
import DummyScreen from './DummyScreen';
import styles from './styles/navigation';

const TabNavigator = createMaterialTopTabNavigator(
  {
    [screenNames.Todos]:TodoScreen,
    [screenNames.Dummy]:DummyScreen
  },
  {
    initialRouteName: screenNames.Todos,
    tabBarOptions: {
      style: styles.tabBar,
      labelStyle:styles.tabLabel
    }
  }
);

const RootStack = createStackNavigator(
  {

    [screenNames.Home]:TabNavigator
  },
  {
    initialRouteName:screenNames.Home,
    navigationOptions:{
      title: 'App',
      headerStyle:styles.header
    }
  }
);

export default RootStack;

