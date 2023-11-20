/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { StackNavigator } from '@/navigation'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native'
import 'react-native-gesture-handler'

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark'

  // Initialize Apollo Client
  const client = new ApolloClient({
    uri: 'https://countries.trevorblades.com/graphql',
    // uri: 'https://71z1g.sse.codesandbox.io/',
    cache: new InMemoryCache(),
  })

  return (
    <ApolloProvider client={client}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar />
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </SafeAreaView>
    </ApolloProvider>
  )
}

export default App
