import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/reset.scss";
import "./styles/index.scss";
import "react-horizontal-scrolling-menu/dist/styles.css";

import { StrictMode } from "react";
import { BrowserRouter as Router } from "react-router-dom";

const root = createRoot(document.getElementById("main") as Element);
root.render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
);
