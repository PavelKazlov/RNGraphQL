import { gql } from '@apollo/client'

export const CONTINENT_QUERY = gql`
  query ContinentQuery {
    continents {
      code
      name
    }
  }
`

export const GET_CART_ITEMS = gql`
  query GetCartItems {
    cartItems @client
  }
`

export const GET_DOGS = gql`
  query GetDogs {
    dogs {
      id
      breed
    }
  }
`
