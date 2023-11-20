import { Screens } from '@/constants'
import { ContinentScreen, DogScreen, HomeScreen } from '@/screens'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

const Stack = createStackNavigator()

export const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={Screens.home}>
      <Stack.Screen name={Screens.home} component={HomeScreen} />
      <Stack.Screen name={Screens.continents} component={ContinentScreen} />
      <Stack.Screen name={Screens.dogs} component={DogScreen} />
    </Stack.Navigator>
  )
}
