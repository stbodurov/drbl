import { createRoot } from "react-dom/client";
import "./styles/reset.scss";
import "./styles/index.scss";

import App from "./App";

const root = createRoot(document.getElementById("main"));
root.render(<App />)