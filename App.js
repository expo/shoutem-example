import React, { Component } from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';
import { AppLoading, Font } from 'expo';
import { Examples } from '@shoutem/ui';

export default class App extends Component {
  // set initial state
  state = {
    loaded: false,
  };

  async componentWillMount() {
    // load in fonts
    await Font.loadAsync({
      'Rubik-Black': require('./node_modules/@shoutem/ui/fonts/Rubik-Black.ttf'),
      'Rubik-BlackItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-BlackItalic.ttf'),
      'Rubik-Bold': require('./node_modules/@shoutem/ui/fonts/Rubik-Bold.ttf'),
      'Rubik-BoldItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-BoldItalic.ttf'),
      'Rubik-Italic': require('./node_modules/@shoutem/ui/fonts/Rubik-Italic.ttf'),
      'Rubik-Light': require('./node_modules/@shoutem/ui/fonts/Rubik-Light.ttf'),
      'Rubik-LightItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-LightItalic.ttf'),
      'Rubik-Medium': require('./node_modules/@shoutem/ui/fonts/Rubik-Medium.ttf'),
      'Rubik-MediumItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-MediumItalic.ttf'),
      'Rubik-Regular': require('./node_modules/@shoutem/ui/fonts/Rubik-Regular.ttf'),
      'rubicon-icon-font': require('./node_modules/@shoutem/ui/fonts/rubicon-icon-font.ttf'),
    });

    // once loaded, update state
    this.setState({
      loaded: true
    });
  }

  render() {
    // if application is not yet loaded
    if (!this.state.loaded) {
      return (
        <AppLoading />
      );
    }

    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" hidden={false} />
        <Examples />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    flex: 1,
    paddingTop: 40,
  },
});
