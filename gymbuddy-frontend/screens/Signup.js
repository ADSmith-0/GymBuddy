import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Signup() {
    return (
        <View>
            <Text style={styles.text}>Signup!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 40,
        alignContent: 'center',
        justifyContent: 'center'
    }
});

export default Signup;
