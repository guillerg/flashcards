import React from 'react';
import { View, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Constants } from 'expo';
import { createStore, applyMiddleware } from 'redux';
import Navigation from './components/Navigation';

const AppStatusBar = ({ backgroundColor, ...props }) => (
  <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

export default class App extends React.Component {


  render() {
    return (
      <Provider store={createStore(reducer, applyMiddleware(thunk))}>
        <View style={{ flex: 1 }}>
          <AppStatusBar backgroundColor={'dark'} barStyle="light-content" />
          <Navigation />
        </View>
      </Provider>
    );
  }
}
