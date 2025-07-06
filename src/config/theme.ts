import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily:[
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','), 
    allVariants:{
      color: 'primary.950',
    }
  },
  palette: {
    primary: {
      50: '#f5f3f1',
      100: '#e7dfda',
      200: '#d0c0b8',
      300: '#b59b8f',
      400: '#9f7d70',
      500: '#916c61',
      600: '#7c5852',
      700: '#644644',
      800: '#563d3d',
      900: '#251a1b',
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        h5: {
          fontWeight: 'bolder',
          fontSize: 24,
        },
        h6: {
          fontWeight: 'bolder',
          fontSize: 20,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          color: '#251a1b ',
          fontWeight: 'bolder',
          background: '#b59b8f',
          ':hover': {
            background: '#9f7d70',
          },
        },
      },
    },
  },
});

export default theme