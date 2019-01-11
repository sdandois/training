import { createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';

import * as screenNames from './screenNames';
import TodoScreen from './TodoScreen/TodoScreen';
import BooksScreen from './BooksScreen/BooksScreen';
import BookDetailScreen from './BookDetailScreen/BookDetailScreen';
import styles from './styles';

const TabNavigator = createMaterialTopTabNavigator(
  {
    [screenNames.Todos]: TodoScreen,
    [screenNames.Books]: BooksScreen
  },
  {
    initialRouteName: screenNames.Todos,
    tabBarOptions: {
      style: styles.tabBar,
      labelStyle: styles.tabLabel
    }
  }
);

const RootStack = createStackNavigator(
  {
    [screenNames.Home]: TabNavigator,
    [screenNames.BookDetail]: BookDetailScreen
  },
  {
    initialRouteName: screenNames.Home,
    navigationOptions: {
      title: 'App',
      headerStyle: styles.header
    }
  }
);

export default RootStack;
