import { createStackNavigator, createAppContainer } from 'react-navigation';
import { screenNames } from '../utils/constant';
import Splash from '../screens/Splash';
 import HeadLines from '../screens/Headlines';
 import HeadlinesDetail from '../screens/HeadlinesDetail';

const MainNavigator = createStackNavigator(
  {
    Splash: {
      screen: Splash,
      key: screenNames.SPLASH_SCREEN,
    },
    HeadLines: {
      screen: HeadLines,
      key: screenNames.HEADLINES_SCREEN,
    },
    HeadlinesDetail: {
      screen: HeadlinesDetail,
      key: screenNames.HEADLINES_DETAIL,
    },
  },
  {
    initialRouteName: 'Splash',
    headerMode: 'none',
  },
);
const RootNavigator = createAppContainer(MainNavigator);

export default RootNavigator;
