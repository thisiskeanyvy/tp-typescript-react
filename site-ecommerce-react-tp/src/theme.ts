import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#5c2483',
      light: '#4e55a2',
      dark: '#41c0f0',
    },
    secondary: {
      main: '#4e55a2',
      light: '#41c0f0',
      dark: '#5c2483',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          backgroundColor: '#5c2483 !important',
          '&:hover': {
            backgroundColor: '#4a1d6b !important',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(to right, #5c2483, #4e55a2, #41c0f0) !important',
        },
      },
    },
  },
});

export default theme;

