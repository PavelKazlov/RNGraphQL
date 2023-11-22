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
    //////////////////////////  Uncomment for different scenarios  /////////////////////////////
    // uri: 'https://countries.trevorblades.com/graphql',
    // uri: 'https://71z1g.sse.codesandbox.io/', // dogs
    uri: 'https://sxewr.sse.codesandbox.io/', // Todos
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: { fetchPolicy: 'cache-only', nextFetchPolicy: 'cache-only' },
    },
  })

  return (
    <ApolloProvider client={client}>
      <StatusBar />
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </SafeAreaView>
    </ApolloProvider>
  )
}

export default App
