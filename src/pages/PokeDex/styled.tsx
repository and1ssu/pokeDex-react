import { Theme } from '@mui/material';
import { makeStyles, createStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      lineHeight: '43px !important',
      letterSpacing: '3px !important',
      fontWeight: 400,
    },
    search: {
      display: 'flex !important',
      justifyContent: 'space-around !important',
    },
    retroList: {
      paddingTop: '2rem',
      display: 'flex',
      gap: '2rem',
      flexWrap: 'wrap',
      paddingLeft: '110px',
      paddingRight: '110px',
    },
  }),
);

export default useStyles;
