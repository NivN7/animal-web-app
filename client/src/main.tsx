import ReactDOM from "react-dom/client";

import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "./providers/index.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);