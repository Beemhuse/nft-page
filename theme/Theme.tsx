import { createTheme } from '@mui/material/styles';
import {  Lateef, Inter, Raleway } from '@next/font/google';
const inter = Inter({ subsets: ['latin'] })
const raleway = Inter({ subsets: ['latin'] })
const theme = createTheme(
  {
    typography: {
      fontFamily: [
        'Poppins',
        'Arial',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      h2:{
        fontFamily: 'raleway',
        fontWeight: 700,
      },
      h3:{
        fontFamily: `${inter}`,
        fontWeight: 700,
      },
      body2:{
        fontFamily:'Mukta Malar', 
      }
    },
  },
);

export default theme;