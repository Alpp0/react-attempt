import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Title = (props) => {
  return (
    <View>
      {" "}
      <Text>{props.number + 1}</Text>
      <Text style={[styles.title, { color: props.color }]}>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: "700",
  },
});

export default Title;
