import { createTheme, Theme } from '@mui/material/styles';

const theme: Theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
          main: '#9296F0',
        },
        secondary: {
          main: '#d32f2f', 
        },
    },
});

export default theme;
