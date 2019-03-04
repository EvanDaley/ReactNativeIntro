import React from 'react';
import { Modal, StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import { ITEMS } from './../shared/items'

export default class Items extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: ITEMS,
            modalVisible: false,
        }
    }

    setModalVisibility = (visibility) => {
        this.setState({ modalVisible: visibility });
    }

    resetForm() {
        this.setState({
            guests: 1,
            smoking: false,
            date: '',
            showModal: false
        });
    }

    render() {
        const renderItem = ({ item, index }) => {
            const Sub = () => {
                return (
                    <View>
                        <Text style={{ textAlign: 'left' }}>
                            {item.purchased_from}
                        </Text>
                        <Text style={{ textAlign: 'left' }}>
                            ${item.cost.toFixed(2)}
                        </Text>
                    </View>
                )
            }
            return (
                <ListItem
                    // COLOR GRADIENT
                    // linearGradientProps={{
                    //     colors: ['#FF9800', '#F44336'],
                    //     start: [1, 0],
                    //     end: [0.2, 0],
                    // }}
                    // titleStyle={{ color: 'white', fontWeight: 'bold' }}
                    // subtitleStyle={{ color: 'white' }}
                    // marginTop={10}
                    key={index}
                    title={item.name}
                    subtitle={<Sub />}
                    leftAvatar={{ source: { uri: item.avatar_url } }}
                />
            );
        };

        return (
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
                <Modal animationType={"slide"} transparent={false}
                    visible={this.state.modalVisible}
                    onDismiss={() => this.setModalVisibility(false)}
                    onRequestClose={() => this.setModalVisibility(false)}>
                    <View style={styles.modal}>
                        <Text style={styles.modalTitle}>Add Item</Text>
                        <Text style={styles.modalText}>Product: {this.state.guests}</Text>
                        <Text style={styles.modalText}>Cost: {this.state.smoking ? 'Yes' : 'No'}</Text>
                        <Text style={styles.modalText}>Purchased From: {this.state.date}</Text>
                        <Text style={styles.modalText}>Image URL: {this.state.date}</Text>

                        <Button
                            onPress={() => { this.setModalVisibility(false); this.resetForm(); }}
                            color="#EBB634"
                            title="Close"
                        />
                    </View>
                </Modal>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    formRow: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
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
        justifyContent: 'center',
        margin: 20
    },
    modalTitle: {
        fontSize: 24,
        // fontWeight: 'bold',
        // backgroundColor: '#512DA8',
        textAlign: 'center',
        // color: 'white',
        marginBottom: 20
    },
    modalText: {
        fontSize: 18,
        margin: 10
    }
});
