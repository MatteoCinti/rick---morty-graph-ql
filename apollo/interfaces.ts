import { Character } from "./generated/graphql";

export interface queryResult {
  characters: {
    results: Character[] | [];
  }
}

export interface CharactersResult {
  characters: Character[] | [];
  error?: {} | null;
}
