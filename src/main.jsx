import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

const rootElement = document.getElementById("app");
const root = createRoot(rootElement);
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
