import { createRouter } from '@expo/ex-navigation';

import AddThingScreen from '../screens/AddThingScreen';
import HistoryScreen from '../screens/HistoryScreen';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import RootNavigation from './RootNavigation';

export default createRouter(() => ({
  history: () => HistoryScreen,
  home: () => HomeScreen,
  links: () => AddThingScreen,
  settings: () => SettingsScreen,
  rootNavigation: () => RootNavigation,
}));
