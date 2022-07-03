import { Button, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import banner from '../../assets/banner.png';
import MenuAppBar from '../../components/MenuAppBar';
import useStyles from './styled';

export function Home(): JSX.Element {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <>
      <MenuAppBar />
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <div className={classes.boxTilte}>
              <Typography
                variant="h2"
                color="secondary"
                className={classes.title}
              >
                Qual pokemon
                <br /> você escolheria?
              </Typography>
              <Typography variant="h6" color="secondary" marginLeft="110px">
                Você pode saber o tipo de Pokémon, seus pontos <br />
                fortes, fracos e habilidades
              </Typography>
              <Button
                color="info"
                variant="contained"
                className={classes.btn}
                onClick={() => navigate('/PokeDex')}
              >
                Veja os pokemons
              </Button>
            </div>
          </Grid>
          <Grid item xs={6}>
            <img src={banner} alt="banner" className={classes.banner} />
          </Grid>
        </Grid>
      </div>
    </>
  );
}
