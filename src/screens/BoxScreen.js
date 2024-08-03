import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.parentStyle}>
      <View style={styles.viewOneStyle}/>
      <View style={styles.viewTwoStyle}/>
      <View style={styles.viewThreeStyle}/>
    </View>
  );
};

const styles = StyleSheet.create({
  parentStyle: {
    borderWidth: 3,
    borderColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100
  },
  viewOneStyle: {
    borderWidth: 3,
    backgroundColor: 'red',
    height:50,
    width:50
  },
  viewTwoStyle: {
    borderWidth: 3,
    backgroundColor: 'green',
    alignSelf: 'flex-end',
    height:50,
    width:50
  },
  viewThreeStyle: {
    borderWidth: 3,
    backgroundColor: 'blue',
    height:50,
    width:50
  }
});

export default BoxScreen;
