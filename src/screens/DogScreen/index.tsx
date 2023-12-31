import { Screens } from '@/constants'
import { GET_DOGS } from '@/gql'
import { useQuery } from '@apollo/client'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { FlatList, Pressable, Text } from 'react-native'

export const DogScreen = () => {
  const navigation = useNavigation()
  const { loading, error, data } = useQuery(GET_DOGS, {
    fetchPolicy: 'network-only', // Used for first execution
    nextFetchPolicy: 'cache-first', // Used for subsequent executions
  })
  // console.log('data =>', data)

  const Dogs = ({ dog }) => {
    // console.log('dog =>', dog)
    const { breed } = dog
    const onPressHandler = () => navigation.navigate(Screens.dogView, { breed })

    return (
      <Pressable onPress={onPressHandler}>
        <Text style={{ fontSize: 26 }}>{breed}</Text>
      </Pressable>
    )
  }

  if (loading) {
    return <Text>Fetching data...</Text>
  }

  if (error) return <Text>`Error! {error.message}`</Text>

  return (
    <FlatList
      initialNumToRender={20}
      data={data.dogs}
      renderItem={({ item }) => <Dogs dog={item} />}
      keyExtractor={(item, index) => item.id}
    />
  )
}
