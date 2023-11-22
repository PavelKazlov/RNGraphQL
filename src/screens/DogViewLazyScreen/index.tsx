import { GET_DOG_PHOTO } from '@/gql'
import { NetworkStatus, useLazyQuery } from '@apollo/client'
import React from 'react'
import { Button, Image, Pressable, Text, View } from 'react-native'

export const DogViewLazyScreen = ({ ...props }) => {
  console.log('props =>', props?.route?.params?.breed)
  const breed = props?.route?.params?.breed
  const [getDog, { loading, error, data, networkStatus }] = useLazyQuery(GET_DOG_PHOTO, {
    variables: { breed },
    // pollInterval: 500,
    notifyOnNetworkStatusChange: true,
  })
  console.log('data =>', data)

  if (networkStatus === NetworkStatus.refetch) return <Text>Refetching...</Text>

  if (loading) {
    return <Text>Fetching data...</Text>
  }

  if (error) return <Text>`Error! {error.message}`</Text>

  return (
    <>
      <Pressable>
        {!!breed && !!data && (
          <Image
            style={{
              height: 400,
              width: 400,
            }}
            source={{ uri: data.dog.displayImage }}
          />
        )}
      </Pressable>
      <View style={{ padding: 10 }}>
        <Button onPress={() => getDog({ variables: { breed: breed } })} title='Refetch new breed!' />
      </View>
    </>
  )
}
