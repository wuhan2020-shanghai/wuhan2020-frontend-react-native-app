import React from 'react';
import { createAppContainer } from 'react-navigation';
import HomeScreen from './Layouts/Home';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Wuhan2020Screen from './Layouts/Wuhan2020';
import NewsScreen from './Layouts/News';
import MobilityScreen from './Layouts/Mobility';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import IconWMaterialIcons from 'react-native-vector-icons/MaterialIcons';

IconWMaterialIcons.loadFont();
Ionicons.loadFont();

const MainNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    News: NewsScreen,
    Mobility: MobilityScreen,
    Wuhan2020: Wuhan2020Screen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = focused ? 'ios-home' : 'ios-home';
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
          // IconComponent = HomeIconWithBadge;
        } else if (routeName === 'Wuhan2020') {
          iconName = focused ? 'ios-heart' : 'ios-heart-empty';
        } else if (routeName === 'News') {
          iconName = 'ios-at';
        } else if (routeName === 'Mobility') {
          iconName = 'ios-train';
        }

        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  },
);

const App = createAppContainer(MainNavigator);

export default App;
