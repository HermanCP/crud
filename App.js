/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { Navigation } from 'react-native-navigation';
import LayoutManager from './src/navigation/config';
import navigation from './src/navigation';
const layoutManager = new LayoutManager();
layoutManager.registerScreens();



Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot(navigation.init())
});

Navigation.setDefaultOptions({
  topBar: {
    title: {
      alignment: "center"
    }
  },
  statusBar: {
    visible: false,
    backgroundColor: 'transparent',
    style: 'light'
  },

})

Navigation.events().registerNavigationButtonPressedListener(
  ({ buttonId, componentId }, { ...props }) => {
   
  });