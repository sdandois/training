import { createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';
import * as screenNames from './constants/screenNames';

import TodoScreen from './TodoScreen';
import BooksScreen from './BooksScreen';

const TabNavigator = createMaterialTopTabNavigator(
  {
    [screenNames.Todos]:TodoScreen,
    [screenNames.Books]:BooksScreen
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

export default RootStack;
