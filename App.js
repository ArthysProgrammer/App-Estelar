import 'react-native-gesture-handler';
import *  as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./screens/Home";
import DailyPicScreen from "./screens/DailyPic";
import SpaceCraftScreen from './screens/SpaceCraft';
import StarMapScreen from './screens/StarMap';

const Stack = createStackNavigator();

export default class App extends Component{
  render() {
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen Component={HomeScreen} Name="Home"/>
          <Stack.Screen Component={StarMapScreen} Name="Map"/>
          <Stack.Screen Component={DailyPicScreen} Name="Pic"/>
          <Stack.Screen Component={SpaceCraftScreen} Name="Craft"/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}