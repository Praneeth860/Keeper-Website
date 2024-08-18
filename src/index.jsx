import React, { StrictMode } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import App from "./components/App";
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
