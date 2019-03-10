import React from "react";
import { Modal, StyleSheet, Text, View, FlatList, Button } from "react-native";
import { Card, ListItem, Input, Icon } from "react-native-elements";

export default class Items extends React.Component {
  render() {
    return (
      <View style={styles.itemsContainer}>
        <Text>hello</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemsContainer: {
    paddingTop: 40,
    flex: 1,
    backgroundColor: "teal"
  }
});
