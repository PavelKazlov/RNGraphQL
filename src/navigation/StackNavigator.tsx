import { Screens } from '@/constants'
import { ContinentScreen, DogScreen, DogViewLazyScreen, DogViewScreen, HomeScreen } from '@/screens'
import { DogLazyScreen } from '@/screens/DogLazyScreen'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

const Stack = createStackNavigator()

export const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={Screens.home}>
      <Stack.Screen name={Screens.home} component={HomeScreen} />
      <Stack.Screen name={Screens.continents} component={ContinentScreen} />
      <Stack.Screen name={Screens.dogs} component={DogScreen} />
      <Stack.Screen name={Screens.dogsLazy} component={DogLazyScreen} />
      <Stack.Screen name={Screens.dogView} component={DogViewScreen} />
      <Stack.Screen name={Screens.dogViewLazy} component={DogViewLazyScreen} />
    </Stack.Navigator>
  )
}
