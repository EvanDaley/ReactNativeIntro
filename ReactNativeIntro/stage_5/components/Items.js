import React from "react";
import { Modal, StyleSheet, Text, View, FlatList, Button } from "react-native";
import { Card, ListItem, Input, Icon } from "react-native-elements";
import { ITEMS } from "./../shared/items";

export default class Items extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: ITEMS,
      modalVisible: false,
      cost: "",
      product: "",
      purchasedFrom: "",
      imageUrl: ""
    };
  }

  setModalVisibility = visibility => {
    this.setState({ modalVisible: visibility });
  };

  resetForm() {
    this.setState({
      cost: "",
      product: "",
      purchasedFrom: "",
      imageUrl: "",
      showModal: false
    });
  }

  submitForm() {
    const newItem = {
      id: this.state.items.length,
      cost: this.state.cost,
      name: this.state.product,
      purchased_from: this.state.purchasedFrom,
      avatar_url: this.state.imageUrl
    };

    this.setState({
      items: [...this.state.items, newItem]
    });
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
        <View>
          <Button
            onPress={() => this.setModalVisibility(true)}
            title="Add Item"
            color="#EBB634"
          />
          <Card title="Receipts">
            <FlatList
              data={this.state.items}
              renderItem={renderItem}
              keyExtractor={item => item.id.toString()}
            />
          </Card>
          <Modal
            animationType={"slide"}
            transparent={false}
            visible={this.state.modalVisible}
            onDismiss={() => this.setModalVisibility(false)}
            onRequestClose={() => this.setModalVisibility(false)}
          >
            <View style={styles.modal}>
              <Text style={styles.modalTitle}>Add Item</Text>

              <Input
                placeholder="Product Name"
                onChangeText={value => this.setState({ product: value })}
              />

              <Input
                placeholder="Cost"
                onChangeText={value => this.setState({ cost: value })}
              />

              <Input
                placeholder="Purchased From"
                onChangeText={value => this.setState({ purchasedFrom: value })}
              />

              <Input
                placeholder="Image URL"
                onChangeText={value => this.setState({ imageUrl: value })}
              />

              <Button
                onPress={() => {
                  this.submitForm();
                  this.setModalVisibility(false);
                }}
                color="teal"
                title="Submit"
              />

              <Button
                onPress={() => {
                  this.setModalVisibility(false);
                  this.resetForm();
                }}
                color="#EBB634"
                title="Close"
              />
            </View>
          </Modal>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemsContainer: {
    paddingTop: 40,
    flex: 1,
    backgroundColor: "teal"
  },
  formRow: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
    margin: 20
  },
  formLabel: {
    fontSize: 18,
    flex: 2
  },
  formItem: {
    flex: 1
  },
  modal: {
    justifyContent: "center",
    margin: 20
  },
  modalTitle: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20
  },
  modalText: {
    fontSize: 18,
    margin: 10
  }
});
