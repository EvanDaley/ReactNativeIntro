import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import React from "react";
import Items from "./components/Items";
import Home from "./components/Home";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isAwaitingClick: true
    };
  }

  proceed() {
    this.setState({ isAwaitingClick: false });
  }

  render() {
    return this.state.isAwaitingClick
      ? <Home proceed={() => this.proceed()} />
      : <Items />;
  }
}
