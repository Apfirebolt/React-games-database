import { StrictMode } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1e3e4a",
    },
    secondary: {
      main: "#19857b",
    },
    light: {
      main: "#f9f9f9",
    },
    dark: {
      main: "#333",
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
);
