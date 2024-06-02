import React from "react";
import { Text, StyleSheet, Button, View, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go To Components Demo"
      />
      <Button
        onPress={() => navigation.navigate("List")}
        title="Go To List Demo"
      />
      {/* <TouchableOpacity onPress={() => navigation.navigate("List")}>
        <Text>Go To List Demo</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
