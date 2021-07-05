import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FoodForm from './src/foodForm';
import FoodList from './src/foodList';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default AppStack = () =>
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="FoodForm"
        component={FoodForm}
        options={{
          title: 'A Redux based Application',
          headerTitleAlign:'center',
          headerTintColor: 'red',
          headerStyle: {
            backgroundColor: 'yellow'
          }
        }}
      />
      <Stack.Screen
        name="FoodList"
        component={FoodList}
        options={{
          headerTintColor: 'red',
          headerStyle: {
            backgroundColor: 'yellow'
          }
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>