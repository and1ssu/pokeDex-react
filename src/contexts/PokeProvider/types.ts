export interface IPokemon {
  result: { name: string; url: string }[];
}

export interface IContext {
  getPokemons(): Promise<void>;
  pokemons: IPokemon[];
}

export interface IPokeProvider {
  children: JSX.Element;
}
