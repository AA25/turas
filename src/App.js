import React from 'react';
import { SafeAreaView } from 'react-native';
import HomeScreen from './components/views/homeScreen';
import ProgressScreen from './components/views/progressScreen';
import MapScreen from './components/views/mapScreen';
import RecommendationScreen from './components/views/RecommedationsScreen';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import NavigationBar from './components/navigationBar';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// React navigation stack settings
// const HomeStack = createStackNavigator(
//   {
//     HomeScreen: HomeScreen,
//     ProgressScreen: ProgressScreen,
//     MapScreen: MapScreen,
//     RecommendationScreen: RecommendationScreen
//   },
//   {
//     initialRouteName: 'HomeScreen',
//     // headerMode: 'none', // Will hide header
//     transitionConfig : () => ({
//       transitionSpec: {
//         duration: 0 // Disable animation transition
//       }
//     }),
//   }
// );

const TabNavigatorr = createBottomTabNavigator(
  {
    Progress: ProgressScreen,
    Home: HomeScreen,
    Favourites: RecommendationScreen,
    Map: MapScreen
  },
  {
    initialRouteName: 'Home',
    tabBarComponent: (props) => (<NavigationBar {...props} />),
    TabNavigatorConfig: {
      lazy: false, // Disables the app from rendering all pages on load
    }
  }
);

const AppContainer = createAppContainer(TabNavigatorr);

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#0e8e50'}} forceInset={{ top: 'always', bottom:'always' }}>
        <AppContainer/>
      </SafeAreaView>
    );
  }
}