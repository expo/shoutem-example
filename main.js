import Exponent from 'exponent';
import React from 'react';
import {
  StyleSheet,
  StatusBar,
  Text,
  View,
} from 'react-native';

import { Font, Components } from 'exponent';
import { Examples } from '@shoutem/ui';

console.disableYellowBox = true;

class App extends React.Component {
  state = {
    fontsAreLoaded: false,
  }

  async componentWillMount() {
    await Font.loadAsync({
      'Rubik-Black': require('./assets/fonts/Rubik-Black.ttf'),
      'Rubik-BlackItalic': require('./assets/fonts/Rubik-BlackItalic.ttf'),
      'Rubik-Bold': require('./assets/fonts/Rubik-Bold.ttf'),
      'Rubik-BoldItalic': require('./assets/fonts/Rubik-BoldItalic.ttf'),
      'Rubik-Italic': require('./assets/fonts/Rubik-Italic.ttf'),
      'Rubik-Light': require('./assets/fonts/Rubik-Light.ttf'),
      'Rubik-LightItalic': require('./assets/fonts/Rubik-LightItalic.ttf'),
      'Rubik-Medium': require('./assets/fonts/Rubik-Medium.ttf'),
      'Rubik-MediumItalic': require('./assets/fonts/Rubik-MediumItalic.ttf'),
      'Rubik-Regular': require('./assets/fonts/Rubik-Regular.ttf'),
      'rubicon-icon-font': require('./assets/fonts/rubicon-icon-font.ttf'),
    });

    this.setState({fontsAreLoaded: true});
  }

  render() {
    if (!this.state.fontsAreLoaded) {
      return <Components.AppLoading />;
    }

    return (
      <View style={{flex: 1}}>
        <Examples />
        <StatusBar hidden={true} />
      </View>
    );
  }
}

Exponent.registerRootComponent(App);
