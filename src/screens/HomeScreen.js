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
      <Button
        onPress={() => navigation.navigate("Image")}
        title="Go To Image Demo"
      /> 
      <Button
        onPress={() => navigation.navigate("Counter")}
        title="Go To Counter Demo"
      />  
      <Button
        onPress={() => navigation.navigate("Color")}
        title="Go To Color Demo"
      />  
      <Button
        onPress={() => navigation.navigate("Square")}
        title="Go To Square Demo"
      /> 
      <Button
        onPress={() => navigation.navigate("Text")}
        title="Go To Text Demo"
      /> 
      <Button
        onPress={() => navigation.navigate("Box")}
        title="Go To Box Demo"
      /> 
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
