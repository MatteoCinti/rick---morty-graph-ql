import { gql } from '@apollo/client';

const GET_ALL_CHARACTERS = gql`
query getAllCharacters {
  characters(page: 1) {
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

export default GET_ALL_CHARACTERS;
