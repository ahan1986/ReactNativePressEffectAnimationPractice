import React from 'react';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, Animated, Dimensions } from 'react-native';

// importing Dimensions from react-native, you can get the dimensions of the window and call it in styles such as height: win.height
const win = Dimensions.get('window');

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
            width: 200, height: 200, backgroundColor: 'tomato',
            transform: [
              {
                scale: this.state.animatePress
              }
            ]
          }} >
            <Image style={{height: 200, width: 200}} source={this.props.imageofMe} />
          </Animated.View>
        </TouchableWithoutFeedback>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
// if you change the height of the animated.view style and the width and not the child. the child will continue to be that same height and width