import { gql } from '@apollo/client';

const GET_CHARACTERS = gql`
query allCharacters {
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

export default GET_CHARACTERS;
