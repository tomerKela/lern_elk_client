// theme.ts
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { deepPurple, amber, grey } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // A professional blue
    },
    secondary: {
      main: "#ff9800", // A contrasting warm orange
    },
    background: {
      default: "#f5f5f5", // Light grey background
      paper: "#ffffff", // White background for cards and paper components
    },
    text: {
      primary: "#212121", // Dark grey for primary text
      secondary: "#757575", // Medium grey for secondary text
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
      color: "#212121", // Dark grey for headings
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
      color: "#212121", // Dark grey for headings
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 500,
      color: "#212121", // Dark grey for headings
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.5,
      color: "#212121", // Dark grey for body text
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.5,
      color: "#757575", // Medium grey for secondary text
    },
    button: {
      textTransform: "none",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
        containedPrimary: {
          backgroundColor: "#1976d2",
          "&:hover": {
            backgroundColor: "#115293",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        },
      },
    },
  },
});

export const mainTheme = responsiveFontSizes(theme);
