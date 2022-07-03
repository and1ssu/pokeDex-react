import { AxiosError } from 'axios';
import { createContext, useState, useMemo, useCallback } from 'react';

import { api } from '../../services/Api';
import { IContext, IPokemon, IPokeProvider } from './types';

export const PokeContext = createContext<IContext>({} as IContext);

export function PokeProvider({ children }: IPokeProvider): JSX.Element {
  const [pokemons, setPokemons] = useState<IPokemon>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<AxiosError | null>(null);

  const getPokemons = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await api.get<IPokemon>('/pokemon');
      console.log('data', data);
      if (data) {
        setPokemons(data);
      }
    } catch (error: any) {
      setError(error);
    }
    setLoading(false);
  }, []);

  const memoValue = useMemo(() => {
    return {
      getPokemons,
      pokemons,
    };
  }, [getPokemons, pokemons]);

  return (
    <PokeContext.Provider value={memoValue}>{children}</PokeContext.Provider>
  );
}
