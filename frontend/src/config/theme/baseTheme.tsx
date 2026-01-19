import type { ThemeOptions } from "@mui/material";

const baseThemeOptions: ThemeOptions = {
  typography: {
    fontFamily: ['Exo2', 'Montserrat'].join(','),
      h4: {
        '@media (max-width:600px)': {
          fontSize: '1.5rem',
        },
      },
      h3: {
        '@media (max-width:600px)': {
          fontSize: '2.25rem',
        },
      },
      h2: {
        '@media (max-width:600px)': {
          fontSize: '3rem',
        },
      }
  },
  components: {
    MuiTypography: {

    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          borderRadius: 0, // Reset just for AppBar
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
        //   backgroundImage: `url('/background.gif')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        },
      },
    },
  },
};

export default baseThemeOptions;