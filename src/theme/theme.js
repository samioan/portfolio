import { createTheme } from "@mui/material/styles";
import { Poppins } from "./fonts";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins",
    h1: {
      fontSize: "4.125rem",
    },
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
});

export { theme };
export default theme;
