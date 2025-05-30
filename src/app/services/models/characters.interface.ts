
export interface CharacterResponse {
  items: Character[];
}

export interface Character {
  id: number;
  name: string;
  ki: number;
  maxKi: number;
  race: string;
  gender: string;
  description: string;
  image: string;
  affiliation: string;
}
