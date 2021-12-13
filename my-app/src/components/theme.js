import { createTheme } from '@mui/material';

import { makeStyles } from "@mui/styles"

import { ThemeProvider } from '@mui/styles';





// const theme = createTheme({
//   palette: {
//     type: 'dark',
//     primary: {
//       main: '#b3aaa2',
//       light: '#b29e84',
//       dark: '#253439',
//     },
//     secondary: {
//       main: '#f50057',
//     },
//     background: {
//       default: '#7C898B',
//     },
//   },
//   typography: {
//     fontFamily: 'Montserrat',
//     fontSize: 14,
//   },
// });

export const theme = createTheme({

// components: {
//     MuiButton: {
//         styleOverrides: {
//             root: {
//                 backgroundColor: "red"
//             }
//         }
//     }
// },

//     palette: {
//     type: 'light',
//     primary: {
//       main: '#b3aaa2',
//       light: '#b29e84',
//       dark: '#253439',
//     },
//     secondary: {
//       main: '#f50057',
//     },
//     background: {
//       default: '#7C898B',
//     },
//   },
//   typography: {
//     fontFamily: 'Montserrat',
//     fontSize: 18,
//   },

  palette: {
    type: 'light',
    primary: {
      main: '#b3aaa2',
      light: '#b29e84',
      dark: '#253439',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: 'rgba(0,0,0,0)',
      paper: '#b29e84',
    },
    text: {
      primary: '#fafafa',
      secondary: 'rgba(0,0,0,0.9)',
    },
  },
  typography: {
    fontFamily: [
        'Montserrat',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    fontSize: 18,
  },
});
