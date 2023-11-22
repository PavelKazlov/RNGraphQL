import { CONTINENT_QUERY } from '@/gql'
import { useQuery } from '@apollo/client'
import React from 'react'
import { FlatList, Pressable, Text } from 'react-native'

export const ContinentScreen = () => {
  const { data, loading } = useQuery(CONTINENT_QUERY)

  const ContinentItem = ({ continent }) => {
    const { name, code } = continent
    return (
      <Pressable>
        <Text>{name}</Text>
      </Pressable>
    )
  }
  if (loading) {
    return <Text>Fetching data...</Text>
  }

  return (
    <FlatList
      initialNumToRender={20}
      data={data.continents}
      renderItem={({ item }) => <ContinentItem continent={item} />}
      keyExtractor={(item, index) => index}
    />
  )
}
