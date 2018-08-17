import React from 'react';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, Animated } from 'react-native';

export default class PressEffectAnimation extends React.Component {
  state = {
    animatePress: new Animated.Value(1)//Value 1 equates to 100% of the size from the start. The initial value.
  }
  //method that shrinks the images
  animateIn() {
    Animated.timing(this.state.animatePress, {
      toValue: 0.95, //the size value that it will shrink to.  In the state, there's the new Animated.Value with parameters of 1 which means the size of the image at it's normal size at which is 100%.
      duration: 100
    }).start()
  }

  animateOut() {
    Animated.timing(this.state.animatePress, {
      toValue: 1, // animate to final value of 1
      duration: 100 // animate with duration of 100
    }).start()//start the animation
  }

  render() {
    return (
      <View style={styles.container}>

        <TouchableWithoutFeedback
          onPressIn={() => this.animateIn()}
          onPressOut={() => this.animateOut()}
        >
          <Animated.View style={{
            width: 500, height: 500, backgroundColor: 'tomato',
            transform: [
              {
                scale: this.state.animatePress
              }
            ]
          }} >
            <Image style={{height: 500, width: 500}} source={this.props.imageofMe} />
          </Animated.View>
        </TouchableWithoutFeedback>

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
