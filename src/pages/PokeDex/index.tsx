import SearchIcon from '@mui/icons-material/Search';
import { Grid, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';

import MenuAppBar from '../../components/MenuAppBar';
import { usePoke } from '../../contexts/PokeProvider/usePoke';
import useStyles from './styled';

export function PokeDex(): JSX.Element {
  const classes = useStyles();

  const { getPokemons, pokemons } = usePoke();
  console.log('poks', pokemons);
  const [search, setSearch] = useState('');

  useEffect(() => {
    getPokemons();
  }, [getPokemons]);

  return (
    <>
      <MenuAppBar />;
      <Grid container marginTop="110px">
        <Grid item xs={12} textAlign="center">
          <Typography variant="h4" className={classes.title}>
            Mais de 250 Pokemons para você escolher o seu favorito
          </Typography>
        </Grid>
      </Grid>
      <Grid container marginTop="15px">
        <Grid item xs={12} className={classes.search}>
          <Paper
            component="form"
            sx={{
              p: '2px 4px',
              display: 'flex',
              width: 990,
              borderRadius: '27px',
              boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Pesquisar pokemon"
              inputProps={{ 'aria-label': 'Pesquisar pokemon' }}
              value={search}
              onChange={({ target }): void => setSearch(target.value)}
            />
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </Grid>
      </Grid>
      {/* <Grid container marginTop="15px">
        <Grid item xs={10} className={classes.search}>
          <div className={classes.retroList}>
            {pokemons.map(pokemon => (
              <div key={pokemon.name}>
                <Typography variant="h6">{pokemon.name}</Typography>
              </div>
            ))}
          </div>
        </Grid>
      </Grid> */}
    </>
  );
}
