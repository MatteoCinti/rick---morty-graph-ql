import React from 'react';
import Image from 'next/image';
import { Heading, Text, SimpleGrid } from '@chakra-ui/react';
import { Character } from '../apollo/generated/graphql';
import { CharactersResult } from '../apollo/interfaces';

const Character: React.FC<CharactersResult> = ({ characters }) => (
    characters  
      ? <SimpleGrid columns={[1, 2, 3]} spacing="40px">
        {characters.map((character: Character) => (
            <div key={character.id}>
             {character.image && <Image src={character.image} width={300} height={300} />}
               <Heading as="h4" text-align="center" size="md">
                 {character.name}
               </Heading>
               <Text align="center">Origin: {character.origin?.name}</Text>
               <Text align="center">Location: {character.location?.name}</Text>
            </div>
          ))
        }
      </SimpleGrid>
      : <div>
        Sorry No results for your query
      </div>
  );

export default Character;
