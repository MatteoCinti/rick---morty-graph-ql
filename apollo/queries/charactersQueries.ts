import { gql } from '@apollo/client';

const allCharactersQuery = `query allCharactersQuery {
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
}`

const GET_CHARACTERS = `${gql} ${allCharactersQuery}`;

export default GET_CHARACTERS;
