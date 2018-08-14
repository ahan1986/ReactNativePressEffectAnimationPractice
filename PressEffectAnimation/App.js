import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PressEffectAnimation from './components/PressEffectAnimation';

export default class App extends React.Component {
  
  render() {
    return (
      <View style={styles.container}>

        <PressEffectAnimation imageofMe={require('./assets/images/111.jpg')} />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
