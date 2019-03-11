import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";

export default (Home = props => {
  return (
    <View style={styles.homeContainer}>
      <TouchableOpacity
        style={styles.homeContainer}
        activeOpacity={1}
        onPressOut={() => {
          props.proceed();
        }}
      >
        <Text style={{ color: "pink", fontSize: 30 }}>Account-Ability</Text>
        <Text
          style={{
            color: "pink",
            fontSize: 25,
            paddingTop: 5,
            paddingBottom: 10
          }}
        >
          Your home for personal finance
        </Text>
        <Text style={{ color: "white", fontSize: 20 }}>
          (click anywhere to proceed)
        </Text>
      </TouchableOpacity>
    </View>
  );
});

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "teal"
  }
});
