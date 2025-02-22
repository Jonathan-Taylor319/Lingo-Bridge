import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    h1: {
      color: 'white', // Text color
      WebkitTextStroke: '2px rgba(0, 0, 0, 0.8)', // Thicker border
    },
    h2: {
      color: 'white', // Text color
      WebkitTextStroke: '2px rgba(0, 0, 0, 0.8)', // Same for h2
    },
    h3: {
      color: 'white', // Text color
      WebkitTextStroke: '2px rgba(0, 0, 0, 0.8)', // Same for h3
    },
    body1: {
      color: '#444444', // Body text color
      fontWeight: 'bold', // Optional: make body text bold
      WebkitTextStroke: '1px rgba(0, 0, 0, 0.7)', // Thinner border for body text
    },
    body2: {
      color: '#444444', // Body text color
      WebkitTextStroke: '1px rgba(0, 0, 0, 0.7)', // Same for body2
    },
  },
});

export default theme;
