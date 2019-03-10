import React from "react";
import { Modal, StyleSheet, Text, View, FlatList, Button } from "react-native";
import { Card, ListItem, Input, Icon } from "react-native-elements";
import { ITEMS } from "./../shared/items";

export default class Items extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: ITEMS
    };
  }
  render() {
    const renderItem = ({ item, index }) => {
      const Sub = () => {
        const cost = item.cost ? "$" + parseFloat(item.cost).toFixed(2) : "na";

        return (
          <View>
            <Text style={{ textAlign: "left" }}>
              {item.purchased_from}
            </Text>
            <Text style={{ textAlign: "left" }}>
              {cost}
            </Text>
          </View>
        );
      };
      return (
        <ListItem
          key={index}
          title={item.name}
          subtitle={<Sub />}
          leftAvatar={{
            source: item.avatar_url && { uri: item.avatar_url },
            title: item.name
          }}
        />
      );
    };

    return (
      <View style={styles.itemsContainer}>
        <Card title="Item Receipts">
          <FlatList
            data={this.state.items}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
          />
          <Button title="Add Item" color="#EBB634" />
        </Card>
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
