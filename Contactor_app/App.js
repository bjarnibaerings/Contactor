import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Boards from "./src/view/main";
import Lists from "./src/view/main";
import AppContainer from "./src/Routes"

export default function App() {
  return (
    <AppContainer/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
