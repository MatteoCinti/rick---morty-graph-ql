import React from 'react';
import Image from 'next/image';
import { Heading, Text, SimpleGrid } from '@chakra-ui/react';
import Character from '../apollo/schema';
import { Results } from '../pages';

const Character: React.FC<Results> = ({ characters }) => {
  return (
    <SimpleGrid columns={[1, 2, 3]} spacing="40px">
      {characters.map((character: Character) => {
        return (
          <div key={character.id}>
            <Image src={character.image} width={300} height={300} />
            <Heading as="h4" text-align="center" size="md">
              {character.name}
            </Heading>
            <Text align="center">Origin: {character.origin.name}</Text>
            <Text align="center">Location: {character.location.name}</Text>
          </div>
        );
      })}
    </SimpleGrid>
  );
};

export default Character;
