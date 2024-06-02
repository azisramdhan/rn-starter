import React from "react";
import { Text, StyleSheet, View, } from 'react-native'; // JSX Elements

const ComponentsScreen = () => {
    var greetings = "Bye, There!";
    return <View>
        <Text style={styles.textStyle}>This is the components screen</Text>
        <Text>{greetings}</Text>
    </View>
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
});

export default ComponentsScreen;