import { Theme } from '@mui/material';
import { makeStyles, createStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    navbar: {
      height: '80px',
      backgroundColor: theme.palette.primary.main,
      position: 'static',
    },

    logo: {
      width: '159px',
      height: '60px',
    },
    btn: {
      color: '#000000 !important',
    },
  }),
);

export default useStyles;
