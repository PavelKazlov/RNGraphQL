import { GET_CART_ITEMS } from '@/gql'
import { makeVar, useQuery } from '@apollo/client'
import React from 'react'
import { FlatList, Pressable, Text } from 'react-native'

export const DogScreen = () => {
  const { data, loading } = useQuery(GET_CART_ITEMS)
  const cartItemsVar = makeVar([])

  const CartItem = ({ item }) => {
    const { name, code } = item
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
      data={data.continents}
      renderItem={({ item }) => <CartItem item={item} />}
      keyExtractor={(item, index) => index}
    />
  )
}
