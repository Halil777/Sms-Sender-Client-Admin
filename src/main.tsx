import { createRoot } from "react-dom/client";
import RootRoute from "./routes/RootRoute";
import "./styles/GlobalStyle.css";
import "./utils/language/i18n.ts";

createRoot(document.getElementById("root")!).render(<RootRoute />);
