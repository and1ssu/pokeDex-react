import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { PokeDex } from '../pages/PokeDex';

export default function PokeRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/PokeDex" element={<PokeDex />} />
    </Routes>
  );
}
