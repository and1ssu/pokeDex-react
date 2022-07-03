import { ThemeProvider, createTheme } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';

import { PokeProvider } from './contexts/PokeProvider';
import PokeRoutes from './routes/routes';

function App() {
  const theme = createTheme({
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          iframe {
            z-index: -1 !important;
           }
        `,
      },
    },

    palette: {
      primary: {
        main: '#F8F9FA',
      },
      secondary: {
        light: '#3c3939',
        main: '#282828',
      },
      info: {
        main: '#48D0B0',
      },
    },

    typography: {
      fontFamily: ['Inter', 'Roboto', 'Arial', 'sans-serif'].join(','),
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <PokeProvider>
          <PokeRoutes />
        </PokeProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
