'use client'

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "var(--font-roboto)",
    h1: {
      fontSize: "clamp(2rem, 5vw, 3rem)",
    },
    body1: {
      fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
    },
  },
});

export default theme;