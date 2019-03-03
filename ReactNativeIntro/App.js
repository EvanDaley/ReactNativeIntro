import React from 'react';
import { TouchableOpacity, Alert, StyleSheet, Text, View } from 'react-native';
import Items from './components/Items'

const Home = (props) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        activeOpacity={1}
        onPressOut={() => { props.proceed() }}
      >
        <Text style={{ color: 'pink', fontSize: 30 }}>Account-Ability</Text>
        <Text style={{ color: 'pink', fontSize: 25, paddingTop: 5, paddingBottom: 10 }}>Your home for personal finance</Text>
        <Text style={{ color: 'white', fontSize: 20 }}>(click anywhere to proceed)</Text>
      </TouchableOpacity>
    </View>
  )
}

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isAwaitingClick: false,
    }
  }

  proceed() {
    this.setState({ isAwaitingClick: false });
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.isAwaitingClick
          ? <Home proceed={() => this.proceed()}/>
          : <Items/>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'teal',
  },
});
