import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    marginTop: '100px',
  },
  banner: {
    width: '100%',
  },
  title: {
    fontSize: '30px',
    fontWeight: 'bold !important',
    marginLeft: '110px !important',
  },
  boxTilte: {
    marginTop: '56px',
  },
  btn: {
    marginLeft: '110px !important',
    marginTop: '20px !important',
    color: '#fff !important',
  },
}));

export default useStyles;
