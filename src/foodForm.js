import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity
} from 'react-native'
import { connect } from 'react-redux';
import { addFood } from './actions/food';
class FoodForm extends Component {
  static navigationOptions = {
    title: 'Home',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: 'blue',
    },
  };
  state = {
    food: null
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>VKD Restaurant</Text>
        <TextInput
          value={this.state.food}
          placeholder='Enter Food'
          style={styles.foodInput}
          onChangeText={(food) => this.setState({ food })}
        />
        <TouchableOpacity
          style={{ marginBottom: 16 }}
          onPress={() => {
            this.props.add(this.state.food)
            this.setState({ food: null })
          }}>
          <Text style={{ fontSize: 22, color: 'yellow' }}>Add to food list</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginBottom: 16 }}
          onPress={() =>
            this.props.navigation.navigate('FoodList')}>
          <Text style={{ fontSize: 22, color: 'yellow' }}>Go to FoodList</Text>
        </TouchableOpacity>
      </View>
    );
  }
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue'
  },
  title: {
    fontSize: 64,
    marginBottom: 48,
    color : '#e81919',
    textAlign: 'center'
  },
  foodInput: {
    fontSize: 32,
    marginBottom: 32,
    borderWidth: 7,
    padding: 8,
    width: '80%',
    borderRadius: 10,
    textAlign: 'center',
    borderColor: 'yellow',
    backgroundColor: 'grey'
  }
});
const mapStateToProps = (state) => {
  console.log(state);
  return {
    foods: state.foodReducer.foodList
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    add: (food) => dispatch(addFood(food))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(FoodForm);