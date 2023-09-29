import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    useColorScheme,
} from 'react-native';

function Apppro(): JSX.Element{
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <View style={styles.Container}>
            <Text style={isDarkMode ? styles.Darktext : styles.Darktext}>Hello World Iam here agian</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        top: 22,
        alignItems: 'center',
    },
    Whitetext: {
        color: 'white',
    },
    Darktext:{
        color: 'black',
    },
    });

export default Apppro;
