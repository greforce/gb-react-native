import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
  Button,
  Alert,
  FlatList,
} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  handlePress = () => {
    console.log('pressed..');
    Alert.alert('Pressed');
  }

  render() {
    const { text } = this.state;

    return (
      <ScrollView contentContainerStyle={[styles.container, text && styles.containerWithInputText]}>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>Gregory</Text>
          <Text style={styles.subtitle}>My first React Native App!</Text>
        </View>
        <View style={styles.containerButtons}>
          <TouchableOpacity onPress={this.handlePress}>
            <Text>Press me opacity</Text>
          </TouchableOpacity>
          <TouchableHighlight onPress={this.handlePress} underlayColor="white">
            <Text>Press me highlight</Text>
          </TouchableHighlight>
          <Button
            onPress={this.handlePress}
            title="Press me"
            color="#841584"
          />
        </View>
        <View style={styles.containerInput}>
          <TextInput
            style={{height: 30, width: 100, backgroundColor: "white"}}
            placeholder="Type text"
            onChangeText={(text) => this.setState({text})}
          />
          <Text>{this.state.text.split(' ').map((word) => word && String.fromCharCode(0xD83C, 0xDF55)).join(' ')}</Text>
        </View>
        <View>
          <FlatList
            data={[{key: 'a'}, {key: 'b'}, {key: 'c'}]}
            renderItem={(elem) => {
              console.log(elem);
              return (<Text>{elem.item.key}</Text>);
            }
          }
          />         
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: 'linen',
    // justifyContent: 'space-between',
    borderWidth: 2,
    borderColor: "red",
    // alignItems: 'stretch',
  },
  containerWithInputText: {
    backgroundColor: 'saddlebrown',
  },
  containerTitle: {
    alignItems: 'center',
    margin: 10,
  },
  containerButtons: {
    alignItems: 'center',
    backgroundColor: 'lightblue',
    padding: 10,
  },
  containerInput: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
  },
  subtitle: {
    color: 'blue',
  }
});
