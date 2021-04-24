import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Login() {
    return (
        <View>
            <Text style={styles.text}>Login!</Text>
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

export default Login;
