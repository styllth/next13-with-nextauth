import { Inter } from "next/font/google";

import { createTheme } from "@mui/material/styles";

const inter = Inter({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const defaultTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#FFCD00",
      contrastText: "#242526",
    },
    background: {
      default: "#242526",
    },
  },
  typography: {
    fontFamily: inter.style.fontFamily,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "html, body": {
          minHeight: "100vh",
          display: "flex",
          flex: 1,
          flexDirection: "column",
        },
      },
    },
  },
});
