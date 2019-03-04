import React from 'react';
import { Modal, Image, Text, View, FlatList, Button } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import { ITEMS } from './../shared/items'

export default class Items extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: ITEMS,
        }
    }

    render() {
        const openNewItemModal = () => {
            console.log("create modal");
        }

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
                    onPress={openNewItemModal}
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
                <Modal>
                    
                </Modal>
            </View>
        )
    }
}
