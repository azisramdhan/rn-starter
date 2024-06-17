import React, { useReducer } from "react";
import { View, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
  const reducer = (state, action) => {
    console.log(state); // { red: 0, green: 0, blue: 0 }
    console.log(action); // { type: red || green || blue, payload: 15 || -15 }

    switch (action.type) {
      case "red":
        // { green: 0, blue: 0, red: state.red + payload } it turn like this at runtime
        return state.red + action.payload > 255 || state.red + action.payload < 0 ? state : { ...state, red: state.red + action.payload };
      case "green":
        return state.green + action.payload > 255 || state.green + action.payload < 0 ? state : { ...state, green: state.green + action.payload };
      case "blue":
        return state.blue + action.payload > 255 || state.blue + action.payload < 0 ? state : { ...state, blue: state.blue + action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;
  console.log(state); // { red: 0, green: 0, blue: 0 }

  return (
    <View>
      <ColorCounter
        onIncrease={() => dispatch({ type: "red", payload: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ type: "red", payload: -COLOR_INCREMENT })}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => dispatch({ type: "green", payload: COLOR_INCREMENT })}
        onDecrease={() =>
          dispatch({ type: "green", payload: -COLOR_INCREMENT })
        }
        color="Green"
      />
      <ColorCounter
        onIncrease={() => dispatch({ type: "blue", payload: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ type: "blue", payload: -COLOR_INCREMENT })}
        color="Blue"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
