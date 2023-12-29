import React from "react";
import { Image, StyleSheet, View } from "react-native";

const App = () => (
  <View style={styles.container}>
    <Image
      resizeMode="cover"
      style={{
        width: "100%",
        height: 180,
        borderWidth: 2,
        borderColor: "red",
      }}
      source={
        "https://media.istockphoto.com/photos/stockholm-sweden-scenic-summer-sunset-view-with-"
      }
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
