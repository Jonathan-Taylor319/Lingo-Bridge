import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    text: {
      color: '#404040', // Slightly darker for readability
      WebkitTextStroke: '3px black', // Black outline
      textShadow: '3px 3px 4px rgba(0, 0, 0, 0.6)',
    },
    h1: {
      color: '#404040', // Slightly darker for readability
      WebkitTextStroke: '1px black', // Black outline
      textShadow: '3px 3px 4px rgba(0, 0, 0, 0.6)',
    },
    h2: {
      color: '#404040',
      WebkitTextStroke: '1px black',
      textShadow: '3px 3px 4px rgba(0, 0, 0, 0.6)',
    },
    h3: {
      color: '#404040',
      WebkitTextStroke: '1px black',
      textShadow: '3px 3px 4px rgba(0, 0, 0, 0.6)',
    },
    p: {
      color: '#404040',
      WebkitTextStroke: '1px black',
      textShadow: '3px 3px 4px rgba(0, 0, 0, 0.6)',
    },
    body1: {
      color: '#404040',
      WebkitTextStroke: '1px black', // Black outline
      textShadow: '3px 3px 4px rgba(0, 0, 0, 0.6)',
      fontWeight: 'bold',
    },
    body2: {
      color: '#404040',
      WebkitTextStroke: '1px black',
      textShadow: '3px 3px 4px rgba(0, 0, 0, 0.6)',
      fontWeight: 'bold',
    },
  },
});

export default theme;
