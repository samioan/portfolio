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
    text: {
      primary: "#EEEEEE",
      secondary: "#a9a9a9",
    },
    backgroundDark: {
      main: "#222831",
    },
    backgroundLight: {
      main: "#393E46",
    },
    highlight: {
      main: "#00ADB5",
    },
    light: {
      main: "#EEEEEE",
    },
    darkTone1: {
      main: "#181818",
    },
    darkTone2: {
      main: "#202020",
    },
    textColor: {
      main: "#a9a9a9",
    },
    lightHalfOpacity: {
      main: "rgba(255,255,255,.05)",
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
