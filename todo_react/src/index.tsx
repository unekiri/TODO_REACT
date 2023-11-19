import React from "react";
import { createRoot } from "react-dom/client";
import "./stylesheets/style.css";

import { App } from "./App";

const rootElement = document.getElementById("root") || document.createElement("div");
if (!rootElement.id) {
  rootElement.id = "root";
}
createRoot(rootElement).render(<App />);