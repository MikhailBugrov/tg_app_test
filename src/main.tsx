import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
// import "./index.css";
import WebApp from "@twa-dev/sdk";
import vkBridge from "@vkontakte/vk-bridge";

vkBridge.send("VKWebAppInit");

WebApp.ready();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
