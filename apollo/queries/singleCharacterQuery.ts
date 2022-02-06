
import { gql } from '@apollo/client';

const GET_SINGLE_CHARACTER = gql`
query getSingleCharacter($characterName: String!) {
  characters(filter: {name: $characterName}){
    info {
      count
      pages
    }
    results {
      name
      id
      location {
        id
        name
      }
      origin {
        id
        name
      }
      episode {
        id
        episode
        air_date
      }
      image
    }
  }
}`;

export default GET_SINGLE_CHARACTER;