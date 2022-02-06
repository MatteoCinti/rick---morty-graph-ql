import { NextApiRequest, NextApiResponse } from "next";
import { getApolloClient } from "../../apollo";
import { CharactersResult, queryResult } from "../../apollo/interfaces";
import GET_SINGLE_CHARACTER from "../../apollo/queries/singleCharacterQuery";

export default async (req: NextApiRequest, res: NextApiResponse<CharactersResult>) => {
  try {
    const apolloClient = getApolloClient();

    const { data } = await apolloClient.query<queryResult>({
      query: GET_SINGLE_CHARACTER,
    });

    res.status(200).json({ characters: data.characters.results, error: null })
  } catch (error) {
    if(error instanceof Error && error.message === '404: Not Found') {
      res.status(400).json({characters: [], error: 'No Character Found'});
    } else {
      res.status(500).json({characters: [], error: 'Internal Error, please try again'});
    }
  }
}