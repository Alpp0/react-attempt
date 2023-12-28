import React from "react";
import { StyleSheet, View } from "react-native";
import Title from "./src/components/Title";
import User from "./src/components/User";
import Users from "./src/components/Users";

const App = () => {
  return (
    <View style={styles.container}>
      <Title text="React Native" color="red" number={1} />
      <Title text="React" color="green" number={2} />
      <Title text="Javascript" color="blue" number={5} />

      <User data={{ id: 1, name: "Mehmet" }} />
      <Users data={["Ahmet", "Mehmet", "Ayşe", "Fatma"]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
