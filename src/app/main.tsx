import { createRoot } from "react-dom/client";
import "./styles/global.css";
import { App } from "./app";

createRoot(document.getElementById("root")!).render(<App />);
