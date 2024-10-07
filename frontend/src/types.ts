// TODO
export interface Country {
  name: string;
  emoji: string;
  code: string;
  id: number;
  continent: Continent;
}

export interface Continent {
  id: number;
  name: string;
}
