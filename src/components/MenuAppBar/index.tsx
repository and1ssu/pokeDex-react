import { Button, Stack, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useNavigate } from 'react-router-dom';

import logo from '../../assets/image2.svg';
import useStyles from './styled';

function MenuAppBar(): JSX.Element {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <AppBar className={classes.navbar}>
      <Toolbar>
        <img
          className={classes.logo}
          style={{
            marginTop: '5px',
            width: '186px',
          }}
          src={logo}
          alt="Logo"
        />
        <Stack direction="row" spacing={2}>
          <Button
            variant="text"
            color="secondary"
            onClick={() => navigate('/')}
          >
            <Typography>Home</Typography>
          </Button>
          <Button
            variant="text"
            color="secondary"
            onClick={() => navigate('/pokeDex')}
          >
            <Typography>Pokemons</Typography>
          </Button>
          <Button variant="text" color="secondary">
            <Typography>contato</Typography>
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
export default MenuAppBar;
