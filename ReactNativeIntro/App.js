import React from 'react';
import { TouchableOpacity, Alert, StyleSheet, Text, View } from 'react-native';
import Items from './components/Items'

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isAwaitingClick: true,
    }
  }

  proceed() {
    this.setState({ isAwaitingClick: true });
  }

  render() {
    const Home = () => {
      return (
        <View>
          <TouchableOpacity
            style={styles.homeContainer}
            activeOpacity={1}
            onPressOut={() => { this.proceed() }}
          >
            <Text style={{ color: 'pink', fontSize: 30 }}>Account-Ability</Text>
            <Text style={{ color: 'pink', fontSize: 25, paddingTop: 5, paddingBottom: 10 }}>Your home for personal finance</Text>
            <Text style={{ color: 'white', fontSize: 20 }}>(click anywhere to proceed)</Text>
          </TouchableOpacity>
        </View>
      )
    }

    style = styles.itemsContainer;
    content = <Items/>;

    if (this.state.isAwaitingClick) {
      let style = styles.homeContainer;
      let content = <Home/>;
    }

    return (
      <View style={style}>
        {content}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'teal',
  },
  itemsContainer: {
    paddingTop: 40,
    flex: 1,
    backgroundColor: 'teal'
  },
});
