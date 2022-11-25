import React, { useReducer } from "react";
import {
  ActivityIndicator, AppState
} from 'react-native'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { ToastProvider } from "../components/message/toast/toastContext";
import { Navigation } from 'react-native-navigation';
import Header from "../components/common/header";
import Auth from "../components/auth/auth";
import Toast from "../components/message/toast/toast";
import { store, persistor } from "../redux/store";
import Register from "../components/register/register";
import Initializing from "../initializing";
import Fibonaci from "../components/fibonaci/fibonaci";
import AddUser from "../components/user/addUser";
import ListUser from "../components/user/listUser";


function WrappedComponent(Component) {
  return function inject(props) {
    const EnhancedComponent = () => (
        <ToastProvider>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <Component {...props}  />
              <Toast {...props} />
            </PersistGate>
          </Provider>
        </ToastProvider>

    );
    return <EnhancedComponent />;
  };
}
export default class LayoutManager {
  registerScreens() {
    Navigation.registerComponent('init.Component', () => WrappedComponent(Initializing));
    Navigation.registerComponent('Login.Component', () => WrappedComponent(Auth));
    Navigation.registerComponent('Header.Component', () => Header);
    Navigation.registerComponent('Register.Component', () => Register);
    Navigation.registerComponent('Fibonaci.Component', () => WrappedComponent(Fibonaci));
    Navigation.registerComponent('Add.User.Component', () => WrappedComponent(AddUser));
    Navigation.registerComponent('List.User.Component', () => WrappedComponent(ListUser));
  }

  

}