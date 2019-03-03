import React from 'react';
import { Text, View, FlatList } from 'react-native';
import {ITEMS} from './../data/items'

export default class Items extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: ITEMS,
        }
    }

    render() {
        console.log(this.state.items);

        const renderItem = ({item, index}) => {
            return (
                <ListItem
                    key={index}
                    title={item.name}
                    subtitle={item.description}
                    leftAvatar={{source: require('./images/alberto.png')}}
                />
            );
        };

        return (
            <View>
                <FlatList>

                </FlatList>
            </View>
        )
    }
}