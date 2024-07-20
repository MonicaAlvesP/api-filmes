import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#8a2be2',
    },
    secondary: {
      main: '#8a2bf6',
    },
    background: {
      default: '#f0f0f0',
      paper: '#ffffff',
    },
    text: {
      primary: '#000000',
      secondary: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Cinzel Decorative, cursive',
    h4: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          padding: '10px 20px',
          '&:hover': {
            backgroundColor: '#ff4500',
          },
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        container: {
          padding: '30px',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        },
      },
    },
  },
  MuiTextField: {
    styleOverrides: {
      root: {
        '& label': {
          backgroundColor: "red",
        },
        '& label.Mui-focused': {
          color: '#8a2be2',
        },
        '& .MuiInput-underline:after': {
          borderBottomColor: '#8a2be2',
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: '#8a2be2',
          },
          '&:hover fieldset': {
            borderColor: '#ff4500',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#8a2be2',
          },
        },
      },
    },
  },
},
);

export default theme;
