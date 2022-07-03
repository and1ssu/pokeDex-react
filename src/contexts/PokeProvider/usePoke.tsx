import { useContext } from 'react';

import { PokeContext } from '.';
import { IContext } from './types';

export function usePoke(): IContext {
  const context = useContext(PokeContext);
  return context;
}
