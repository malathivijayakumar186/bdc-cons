import { createTheme } from '@mui/material';
import { greenColor } from './Colors';

const CustomTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: `${greenColor}`,
    },
    secondary: {
      main: '#fff',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: ['Marcellus-Regular'].join(','),
  },

  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: 'black',
        },
      },
    },

    MuiMenu: {
      defaultProps: {
        disableScrollLock: true,
      },
    },

    MuiSelect: {
      defaultProps: {
        MenuProps: {
          disableScrollLock: true,
        },
      },
    },

  
    MuiButtonBase: {
      defaultProps: {
  
        disableRipple: true, 
      },
    },
  },
});

export default CustomTheme;
