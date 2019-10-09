import { createStackNavigator, createAppContainer } from 'react-navigation';
import Splash from '../screens/Splash';
 import Home from '../screens/Home';
import { screenNames } from '../utils/constant';

const MainNavigator = createStackNavigator(
  {
    Splash: {
      screen: Splash,
      key: screenNames.SPLASH_SCREEN,
    },
    Home: {
      screen: Home,
      key: screenNames.HOME_SCREEN,
    },
  },
  {
    initialRouteName: 'Splash',
    headerMode: 'none',
  },
);
const RootNavigator = createAppContainer(MainNavigator);

export default RootNavigator;
