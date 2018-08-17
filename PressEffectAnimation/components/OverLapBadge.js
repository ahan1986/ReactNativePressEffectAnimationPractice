import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Button, Animated } from 'react-native';

export default class OverLapBadge extends React.Component {
    state = {
        badgeScale: new Animated.Value(0),
        addedValue: 0
    }

    animatedBadge () {
        Animated.timing(this.state.badgeScale, {
            toValue: 1,
            duration: 500
        }).start();

        const addingNewValue = this.state.addedValue + 1;
        this.setState({
            addedValue: addingNewValue
        })
        
    }

    render() {
        return (
            <View style={styles.container}>
                <Animated.View style={{ position: 'absolute', height: 100, width: 100, borderRadius: 50, backgroundColor: 'black', top: 50, left: 100, justifyContent: 'center', alignItems: 'center', borderColor: 'green', borderWidth: 10,
                transform: [
                    {
                        scale: this.state.badgeScale
                    }
                ] }}>
                    <Text style={{ color: 'white' }}>
                        {this.state.addedValue}
                    </Text>
                </Animated.View>
                <Button title='add' onPress={() => this.animatedBadge()}></Button>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        height: 200,
        width: 200
    }
})