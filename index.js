import { AppRegistry, Dimensions } from 'react-native';
import App from './src/Components/App';
import First from './src/Components/First'
import Second from './src/Components/Second'
import StackScreen1 from './src/Components/StackScreen'

import { DrawerNavigator } from 'react-navigation'
import { StackNavigator } from 'react-navigation';

const StackScreen = StackNavigator({
  Home: { screen: App },
  StackScreen: { screen: StackScreen1 },
},
  {
    headerMode: 'none'
  }
);

const MyApp = DrawerNavigator({
  Home: {
    screen: StackScreen,
  },
  First: {
    screen: First,
  },
  Second: {
    screen: Second,
  },
}, {
    drawerWidth: Dimensions.get('window').width / 2
  });

AppRegistry.registerComponent('StackNavigationWithinDrawerNavigation', () => MyApp);
