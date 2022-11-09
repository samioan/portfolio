import { createTheme } from "@mui/material/styles";
import { Poppins } from "./fonts";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "@font-face": {
          fontFamily: "Poppins",
          src: `url(${Poppins}) format('opentype')`,
        },
      },
    },
  },
  palette: {
    white: {
      main: "#fff",
    },
    black: {
      main: "#000",
    },
    text: {
      primary: "#5ac24e",
      secondary: "#a9a9a9",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 560,
      md: 1023,
      lg: 1330,
      xl: 1536,
    },
  },
});

export { theme };
export default theme;
