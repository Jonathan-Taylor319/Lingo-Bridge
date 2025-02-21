import { createTheme } from '@mui/material/styles';

// Define your custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#008080', // Teal (your preferred color)
    },
    secondary: {
      main: '#3B82F6', // Blue
    },
    background: {
      default: '#E6F4F1', // Light teal background
    },
    text: {
      primary: '#333333', // Dark text
    },
  },
  typography: {
    fontFamily: '"Public Sans", sans-serif',
    h1: {
      fontSize: '2rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '1.75rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#008080', // Match your branding
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none', // Remove uppercase text
          fontWeight: 600,
          borderRadius: '8px', // Rounded corners
        },
      },
    },
  },
});

export default theme;
