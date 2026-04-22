import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { Analytics } from "./components/seo/Analytics";
import { JsonLd } from "./components/seo/JsonLd";
import "./index.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary>
      <JsonLd />
      <Analytics />
      <App />
    </ErrorBoundary>
  </StrictMode>
);
