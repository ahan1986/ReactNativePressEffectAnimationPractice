import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

export default class OverLapBadge extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={{ height: 100, width: 100, borderRadius: 50, backgroundColor: 'black' }}>
                    <Text style={{ color: 'white', paddingLeft: 30, paddingTop: 40 }}>Hello</Text>
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red'
    }
})