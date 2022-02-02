interface Location {
  __typename: string;
  id: string;
  name: string;
}

interface Origin {
  __typename: string;
  id: string;
  name: string;
}

interface Character {
  name: string;
  id: string;
  location: Location;
  origin: Origin;
  episode: string[];
  image: string;
}

export default Character;
