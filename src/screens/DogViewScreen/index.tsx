import { GET_DOG_PHOTO } from '@/gql'
import { NetworkStatus, useQuery } from '@apollo/client'
import React from 'react'
import { Button, Image, Pressable, Text, View } from 'react-native'

export const DogViewScreen = ({ ...props }) => {
  const breed = props?.route?.params?.breed
  const { loading, error, data, refetch, networkStatus } = useQuery(GET_DOG_PHOTO, {
    variables: { breed },
    // pollInterval: 500,
    notifyOnNetworkStatusChange: true,
  })

  if (networkStatus === NetworkStatus.refetch) return <Text>Refetching...</Text>

  if (loading) {
    return <Text>Fetching data...</Text>
  }

  if (error) return <Text>`Error! {error.message}`</Text>

  return (
    <>
      <Pressable>
        {!!breed && (
          <Image
            style={{
              height: 400,
              width: 400,
            }}
            // source={data.dog.displayImage}

            source={{ uri: data.dog.displayImage }}
          />
        )}
      </Pressable>
      <View style={{ padding: 10 }}>
        <Button
          onPress={() =>
            refetch({
              breed: 'dalmatian',
              //   breed: breed,
            })
          }
          title='Refetch new breed!'
        />
      </View>
    </>
  )
}
