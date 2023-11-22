import { Screens } from '@/constants'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button, View } from 'react-native'

export const HomeScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={{ flex: 1, paddingTop: 250 }}>
      <View style={{ padding: 10 }}>
        <Button title='Get Dogs with useQuery' onPress={() => navigation.navigate(Screens.dogs)} />
      </View>
      <View style={{ padding: 10 }}>
        <Button title='Get Dogs with useLazyQuery' onPress={() => navigation.navigate(Screens.dogsLazy)} />
      </View>
      <View style={{ padding: 10 }}>
        <Button title='Go to Continents' onPress={() => navigation.navigate(Screens.continents)} />
      </View>
    </View>
  )
}
