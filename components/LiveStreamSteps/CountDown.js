import { StyleSheet, Text, View } from "react-native";
import React from "react";

const CountDown = ({ count }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{count}</Text>
    </View>
  );
};

export default CountDown;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 30,
    position: "absolute",
    height: "100%",
    width: "100%",
  },
  text: {
    color: "white",
    fontSize: 70,
    fontWeight: "bold",
    paddingHorizontal: 70,
    paddingVertical: 50,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 500,
  },
});
