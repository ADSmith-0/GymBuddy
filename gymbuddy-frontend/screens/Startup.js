import React from 'react';
import {Button, View, StyleSheet, Alert, Text} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

function Startup({navigation}) {
    return (
        <View style={styles.view}>
            <TouchableHighlight onPress={() => navigation.navigate('Signup')}>
                <View
                id="signup"
                style={styles.button}>
                    <Text>Sign up</Text>
                </View>
            </TouchableHighlight>

            <Button
                id="login"
                onPress={() => navigation.navigate('Login')}
                style={styles.button}
                title="Login">
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    }, 

    button: {
        fontSize: 50,
        backgroundColor: '#DDD'
    }
});

export default Startup;
