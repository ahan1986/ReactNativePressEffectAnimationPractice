import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PressEffectAnimation from './components/PressEffectAnimation';
import OverLapBadge from './components/OverLapBadge';

export default class App extends React.Component {
  
  render() {
    return (
      <View style={styles.container}>
        {/* Clicking on the image will shrink it and expand back out when you let go of the screen */}
        <PressEffectAnimation imageofMe={require('./assets/images/111.jpg')} />

        <OverLapBadge />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
